var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Player from "./Player.js";
const PlayerOne = new Player('x');
const PlayerTwo = new Player('o');
const radioButtons = document.querySelectorAll('input[name="playOption"]');
const tiles = document.querySelectorAll('.tile');
const winningNums = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 5, 9], [1, 4, 7], [2, 5, 8],
    [3, 6, 9]
];
const TicTacToe = {
    mode: 'CPU',
    inMatch: false,
    players: [PlayerOne, PlayerTwo],
    turn: 0
};
const checkForWin = (player) => {
    const playerTiles = JSON.stringify(player.getMarkedTiles);
    let won = false;
    winningNums.forEach((combo) => {
        if (playerTiles === JSON.stringify(combo))
            won = true;
    });
    return won;
};
const stall = (ms) => __awaiter(void 0, void 0, void 0, function* () { return new Promise((resolve) => setTimeout(resolve, ms)); });
const tileIsMarked = (tile) => tile instanceof HTMLParagraphElement;
const switchTurn = () => {
    TicTacToe.turn = TicTacToe.turn === 0 ? 1 : 0;
};
const handleTileSelect = (e) => {
    if (tileIsMarked(e.target))
        return;
    const tile = e.target;
    const player = TicTacToe.players[TicTacToe.turn];
    player.markTile(tile);
    if (checkForWin(player)) {
        alert(`${player.marker} has won!`);
    }
    else {
        switchTurn();
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
