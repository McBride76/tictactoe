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
const PlayerOne = new Player('Ned', 'ned2.png');
const PlayerTwo = new Player('Ponky', 'ponky.png');
const radioButtons = document.querySelectorAll('input[name="playOption"]');
const tiles = document.querySelectorAll('.tile');
const playBtnModal = document.getElementById('playBtnModal');
const playBtn = document.getElementById('playBtn');
const playerImgModal = document.getElementById('imgDiv');
const playerImg = document.getElementById('playerImg');
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
    tileNums.forEach((id) => {
        tiles[id - 1].removeEventListener('mouseenter', toggleTileBgColor);
        tiles[id - 1].removeEventListener('mouseleave', toggleTileBgColor);
        setTileBgColor(tiles[id - 1], 'rgb(0, 13, 255)');
    });
};
const showPlayerImg = (player) => {
    showElement(playerImgModal, 'flex');
    showElement(playerImg, 'block');
    playerImg.src = player.getMarker;
    playerImg.classList.add('animate');
};
const hidePlayerImg = () => {
    hideElements([playerImgModal, playerImg]);
    playerImg.src = "";
    playerImg.classList.remove('animate');
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
    hidePlayerImg();
    hideElements([playBtnModal]);
    tiles.forEach((tile) => resetTile(tile));
    TicTacToe.players.forEach((player) => player.reset());
};
const stall = (ms) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => setTimeout(resolve, ms));
});
const hideElements = ([...elements]) => {
    elements.forEach((element) => element.style.display = 'none');
};
const showElement = (element, displayType) => element.style.display = displayType;
const tileIsMarked = (tile) => tile.hasChildNodes();
const switchTurn = () => {
    TicTacToe.turn = TicTacToe.turn === 0 ? 1 : 0;
};
const resetTile = (tile) => {
    var _a;
    (_a = tile.firstElementChild) === null || _a === void 0 ? void 0 : _a.remove();
    tile.style.backgroundColor = 'rgb(255, 255, 255)';
    tile.removeEventListener('mouseenter', toggleTileBgColor);
    tile.removeEventListener('mouseleave', toggleTileBgColor);
    tile.addEventListener('mouseenter', toggleTileBgColor);
    tile.addEventListener('mouseleave', toggleTileBgColor);
    tile.addEventListener('click', handleTileSelect);
};
const handleWin = (player, winningTiles) => {
    highlightWinningTiles(winningTiles);
    showElement(playBtnModal, 'block');
    showPlayerImg(player);
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
    playBtn.addEventListener('click', startGame);
});
