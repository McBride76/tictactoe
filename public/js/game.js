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
import Board from "./Board.js";
import Tile from "./Tile.js";
const PlayerOne = new Player('Ned', 'ned2.png');
const PlayerTwo = new Player('Ponky', 'ponky.png');
const radioButtons = document.querySelectorAll('input[name="playOption"]');
const Tiles = Array.from(document.querySelectorAll('.tile')).map(tile => new Tile(tile));
const playBtnModal = document.getElementById('playBtnModal');
const playBtn = document.getElementById('playBtn');
const playerImgModal = document.getElementById('imgDiv');
const playerImg = document.getElementById('playerImg');
const board = new Board(Tiles);
const winningNums = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 5, 9], [1, 4, 7], [2, 5, 8],
    [3, 6, 9], [3, 5, 7]
];
let unmarkedTiles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const TicTacToe = {
    mode: 'CPU',
    inMatch: false,
    players: [PlayerOne, PlayerTwo],
    turn: 0
};
const tileClick = (e) => {
    const tileID = Number(e.target.id);
    const tile = Tiles[tileID - 1];
    handleTileSelect(tile);
    // const tile = e.target as Tile;
    // if (tileIsMarked(tile) || (TicTacToe.turn === 1 && TicTacToe.mode === 'CPU')) return;
    // handleTileSelect(tile);
};
Tiles.forEach(tile => tile.element.addEventListener('click', tileClick));
// const highlightWinningTiles = (tileNums: number[]) => {
//     tileNums.forEach((id: number) => {
//         tiles[id - 1].removeEventListener('mouseenter', toggleTileBgColor);
//         tiles[id - 1].removeEventListener('mouseleave', toggleTileBgColor);
//         setTileBgColor(tiles[id - 1], 'rgb(0, 13, 255)');
//     });
// }
const showPlayerImg = (player) => {
    showElement(playerImgModal, 'flex');
    showElement(playerImg, 'block');
    //(playerImg as HTMLImageElement).src = player.getMarker;
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
    //tiles.forEach((tile: HTMLDivElement) => resetTile(tile));
    TicTacToe.players.forEach((player) => player.reset());
};
const stall = (ms) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => setTimeout(resolve, ms));
});
const hideElements = ([...elements]) => {
    elements.forEach((element) => element.style.display = 'none');
};
const showElement = (element, displayType) => element.style.display = displayType;
// const tileIsMarked = (tile: Tile): boolean => tile.hasChildNodes();
const switchTurn = () => {
    TicTacToe.turn = TicTacToe.turn === 0 ? 1 : 0;
};
// const resetTile = (tile: HTMLDivElement) => {
//     tile.firstElementChild?.remove();
//     tile.style.backgroundColor = 'rgb(255, 255, 255)';
//     tile.removeEventListener('mouseenter', toggleTileBgColor);
//     tile.removeEventListener('mouseleave', toggleTileBgColor);
//     tile.addEventListener('mouseenter', toggleTileBgColor);
//     tile.addEventListener('mouseleave', toggleTileBgColor);
//     tile.addEventListener('click', tileClick);
// }
// const handleWin = async (player: Player, winningTiles: number[]) => {
//     highlightWinningTiles(winningTiles);
//     showPlayerImg(player);
//     await stall(1000);
//     showElement(playBtnModal, 'block');
// }
const cpuTurn = () => {
    let index = Math.floor(Math.random() * unmarkedTiles.length);
    console.log(index, unmarkedTiles.length);
    TicTacToe.turn = 1;
    console.log(index - 1);
    //TicTacToe.players[TicTacToe.turn].markTile(tiles[index - 1]);
    //unmarkedTiles.splice(unmarkedTiles.indexOf(Number(tiles[index - 1].id)), 1);
};
const handleTileSelect = (tile) => {
    const player = TicTacToe.players[TicTacToe.turn];
    board.markTile(player, tile);
    //unmarkedTiles.splice(unmarkedTiles.indexOf(Number(tile.id)), 1);
    //console.log('Line 134: unmarkedTiles = ' + unmarkedTiles);
    //player.markTile(tile);
    //let winCombo = playerWinCombo(player);
    // if (winCombo.length > 0) {
    //     //handleWin(player, winCombo);
    //     return;
    // }
    // if (TicTacToe.mode === 'CPU') {
    //     cpuTurn();
    // }
    switchTurn();
};
//const setTileBgColor = (tile: HTMLDivElement, rgb: string) => tile.style.backgroundColor = rgb;
// const toggleTileBgColor = (e: MouseEvent) => {
//     const tile = e.target as Tile;
//     if (tileIsMarked(tile)) {
//         setTileBgColor(tile, 'rgb(255, 255, 255)');
//     } else {
//         let color = tile.style.backgroundColor === 'rgb(255, 255, 255)' ? 'rgb(248, 251, 255)' : 'rgb(255, 255, 255)';
//         setTileBgColor(tile, color);
//     }
// }
radioButtons.forEach((radio) => {
    radio.addEventListener('change', () => {
        var _a;
        TicTacToe.mode = (_a = Array.from(radioButtons).find(radio => radio.checked)) === null || _a === void 0 ? void 0 : _a.value;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    playBtn.addEventListener('click', startGame);
});
