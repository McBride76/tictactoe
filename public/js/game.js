"use strict";
const radioButtons = document.querySelectorAll('input[name="playOption"]');
const TicTacToe = {
    mode: 'CPU',
    inMatch: false
};
radioButtons.forEach((radio) => {
    radio.addEventListener('change', () => {
        var _a;
        TicTacToe.mode = (_a = Array.from(radioButtons).find(radio => radio.checked)) === null || _a === void 0 ? void 0 : _a.value;
    });
});
