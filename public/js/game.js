"use strict";
const radioButtons = document.querySelectorAll('input[name="playOption"]');
const tiles = document.querySelectorAll('.tile');
const TicTacToe = {
    mode: 'CPU',
    inMatch: false
};
const tileIsMarked = (tile) => tile instanceof HTMLParagraphElement;
const handleTileSelect = (e) => {
    if (tileIsMarked(e.target))
        return;
    if (TicTacToe.mode === 'CPU') {
        console.log("CPU turn");
    }
    else {
        console.log("Player 2 Turn");
    }
};
radioButtons.forEach((radio) => {
    radio.addEventListener('change', () => {
        var _a;
        TicTacToe.mode = (_a = Array.from(radioButtons).find(radio => radio.checked)) === null || _a === void 0 ? void 0 : _a.value;
    });
});
tiles.forEach((tile) => {
    tile.addEventListener('mouseover', (e) => {
        if (!tileIsMarked(e.target)) {
            tile.style.backgroundColor = '#fafcff';
        }
    });
    tile.addEventListener('mouseout', () => tile.style.backgroundColor = '#ffffff');
    tile.addEventListener('click', handleTileSelect);
});
