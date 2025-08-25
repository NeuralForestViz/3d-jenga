const assert = require('assert');
const { describe, it } = require('node:test');
const { keys, onKeyDown, onKeyUp } = require('../keyboard.js');

describe('keyboard controls', () => {
    function resetKeys() {
        keys.w = keys.a = keys.s = keys.d = false;
        keys.space = keys.ctrl = keys.x = false;
    }

    it('should set movement keys on keydown', () => {
        resetKeys();
        onKeyDown({ key: 'w', preventDefault: () => {} });
        onKeyDown({ key: 'a', preventDefault: () => {} });
        onKeyDown({ key: 's', preventDefault: () => {} });
        onKeyDown({ key: 'd', preventDefault: () => {} });
        assert.strictEqual(keys.w && keys.a && keys.s && keys.d, true);
    });

    it('should handle space and control keys', () => {
        resetKeys();
        onKeyDown({ key: ' ', preventDefault: () => {} });
        onKeyDown({ key: 'Control', preventDefault: () => {} });
        assert.strictEqual(keys.space && keys.ctrl, true);
    });

    it('should clear keys on keyup', () => {
        resetKeys();
        keys.w = keys.space = true;
        onKeyUp({ key: 'w' });
        onKeyUp({ key: ' ' });
        assert.strictEqual(keys.w || keys.space, false);
    });
});
