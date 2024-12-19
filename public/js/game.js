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
const playBtnModal = document.getElementById('playBtnModal');
const playBtn = document.getElementById('playBtn');
const ponkyModal = document.getElementById('ponkyDiv');
const ponky = document.getElementById('ponky');
const winningNums = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 5, 9], [1, 4, 7], [2, 5, 8],
    [3, 6, 9], [3, 5, 7]
];
const TicTacToe = {
    mode: 'CPU',
    inMatch: false,
    players: [PlayerOne, PlayerTwo],
    turn: 0
};
const highlightWinningTiles = (tileNums) => {
    console.log(tileNums);
    tileNums.forEach((id) => {
        tiles[id - 1].removeEventListener('mouseenter', toggleTileBgColor);
        tiles[id - 1].removeEventListener('mouseleave', toggleTileBgColor);
        tiles[id - 1].style.backgroundColor = 'blue';
    });
};
const showPonky = () => {
    ponkyModal.style.display = 'flex';
    ponky.style.display = 'block';
    //ponky.style.width = '400px';
    ponky.classList.add('animate');
};
const hidePonky = () => {
    ponkyModal.style.display = 'none';
    ponky.style.display = 'none';
    ponky.style.width = '100px';
};
const playerWinCombo = (player) => {
    const playerTiles = player.getMarkedTiles;
    let winCombo = [];
    winningNums.some((combo) => {
        if (combo.every((num) => playerTiles.includes(num))) {
            winCombo = combo;
            return true;
        }
        return false;
    });
    return winCombo;
};
const startGame = () => {
    playBtnModal.classList.add('display-none');
    hidePonky();
    tiles.forEach((tile) => {
        tile.style.backgroundColor = 'rgb(255, 255, 255)';
        tile.removeEventListener('mouseenter', toggleTileBgColor);
        tile.removeEventListener('mouseleave', toggleTileBgColor);
        tile.addEventListener('mouseenter', toggleTileBgColor);
        tile.addEventListener('mouseleave', toggleTileBgColor);
        tile.addEventListener('click', handleTileSelect);
    });
    TicTacToe.players.forEach((player) => player.reset());
};
const stall = (ms) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => setTimeout(resolve, ms));
});
const tileIsMarked = (tile) => { var _a; return ((_a = tile.firstElementChild) === null || _a === void 0 ? void 0 : _a.innerHTML) !== ""; };
const switchTurn = () => {
    TicTacToe.turn = TicTacToe.turn === 0 ? 1 : 0;
};
const resetTile = (tile) => {
};
const handleWin = (player, winningTiles) => {
    highlightWinningTiles(winningTiles);
    // playBtnModal.classList.remove('display-none');
    // playBtn.addEventListener('click', startGame);
    showPonky();
};
const handleTileSelect = (e) => {
    if (tileIsMarked(e.target))
        return;
    const tile = e.target;
    const player = TicTacToe.players[TicTacToe.turn];
    player.markTile(tile);
    let winCombo = playerWinCombo(player);
    winCombo.length > 0 ? handleWin(player, winCombo) : switchTurn();
};
const setTileBgColor = (tile, rgb) => tile.style.backgroundColor = rgb;
const toggleTileBgColor = (e) => {
    const tile = e.target;
    if (tileIsMarked(tile)) {
        setTileBgColor(tile, 'rgb(255, 255, 255)');
    }
    else {
        let color = tile.style.backgroundColor === 'rgb(255, 255, 255)' ? 'rgb(248, 251, 255)' : 'rgb(255, 255, 255)';
        setTileBgColor(tile, color);
    }
};
radioButtons.forEach((radio) => {
    radio.addEventListener('change', () => {
        var _a;
        TicTacToe.mode = (_a = Array.from(radioButtons).find(radio => radio.checked)) === null || _a === void 0 ? void 0 : _a.value;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    startGame();
});
