const keys = {
    w: false,
    a: false,
    s: false,
    d: false,
    space: false,
    ctrl: false,
    x: false
};

function onKeyDown(event) {
    const key = event.key.toLowerCase();

    switch (key) {
        case 'w':
            keys.w = true;
            break;
        case 'a':
            keys.a = true;
            break;
        case 's':
            keys.s = true;
            break;
        case 'd':
            keys.d = true;
            break;
        case ' ':
            event.preventDefault();
            keys.space = true;
            break;
        case 'control':
            keys.ctrl = true;
            break;
        case 'x':
            keys.x = true;
            if (typeof dropBlock === 'function' && typeof selectedBlock !== 'undefined' && selectedBlock) {
                dropBlock(selectedBlock);
            }
            break;
    }
}

function onKeyUp(event) {
    const key = event.key.toLowerCase();

    switch (key) {
        case 'w':
            keys.w = false;
            break;
        case 'a':
            keys.a = false;
            break;
        case 's':
            keys.s = false;
            break;
        case 'd':
            keys.d = false;
            break;
        case ' ':
            keys.space = false;
            break;
        case 'control':
            keys.ctrl = false;
            break;
        case 'x':
            keys.x = false;
            break;
    }
}

if (typeof window !== 'undefined') {
    window.keys = keys;
    window.onKeyDown = onKeyDown;
    window.onKeyUp = onKeyUp;
    window.addEventListener('keydown', onKeyDown, { capture: true });
    window.addEventListener('keyup', onKeyUp, { capture: true });
}

if (typeof module !== 'undefined') {
    module.exports = { keys, onKeyDown, onKeyUp };
}
