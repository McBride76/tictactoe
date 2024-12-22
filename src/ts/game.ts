import Player from "./Player.js";
import Board from "./Board.js";
import Tile from "./Tile.js";

type PlayMode = 'CPU' | 'PVP';

//type Tile = HTMLDivElement;

type DisplayType = 'block' | 'flex';

const PlayerOne = new Player('Ned', 'ned2.png');
const PlayerTwo = new Player('Ponky', 'ponky.png');

const radioButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="playOption"]')!;

const Tiles: Tile[] = Array.from(document.querySelectorAll<HTMLDivElement>('.tile')).map(tile => new Tile(tile));

const playBtnModal: HTMLElement = document.getElementById('playBtnModal')!;
const playBtn: HTMLElement = document.getElementById('playBtn')!;

const playerImgModal: HTMLElement = document.getElementById('imgDiv')!;
const playerImg: HTMLElement = document.getElementById('playerImg')!;

const board = new Board(Tiles);

const winningNums = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 5, 9], [1, 4, 7], [2, 5, 8],
    [3, 6, 9], [3, 5, 7]
];

let unmarkedTiles = [1, 2, 3, 4, 5, 6, 7, 8, 9];

type Game = {
    mode: PlayMode,
    inMatch: boolean,
    players: Player[],
    turn: 0 | 1
};

const TicTacToe: Game = {
    mode: 'CPU',
    inMatch: false,
    players: [PlayerOne, PlayerTwo],
    turn: 0
};

const tileClick = (e: MouseEvent) => {
    const tileID = Number((e.target as HTMLDivElement).id);
    const tile = Tiles[tileID - 1];
    handleTileSelect(tile);
}

Tiles.forEach(tile => tile.element.addEventListener('click', tileClick));

// const highlightWinningTiles = (tileNums: number[]) => {
//     tileNums.forEach((id: number) => {
//         tiles[id - 1].removeEventListener('mouseenter', toggleTileBgColor);
//         tiles[id - 1].removeEventListener('mouseleave', toggleTileBgColor);
//         setTileBgColor(tiles[id - 1], 'rgb(0, 13, 255)');
//     });
// }

const showPlayerImg = (player: Player) => {
    showElement(playerImgModal, 'flex');
    showElement(playerImg, 'block');
    //(playerImg as HTMLImageElement).src = player.getMarker;
    playerImg.classList.add('animate');
}

const hidePlayerImg = () => {
    hideElements([playerImgModal, playerImg]);
    (playerImg as HTMLImageElement).src = "";
    playerImg.classList.remove('animate');
}

const startGame = () => {
    hidePlayerImg();
    hideElements([playBtnModal]);
    //tiles.forEach((tile: HTMLDivElement) => resetTile(tile));
    TicTacToe.players.forEach((player: Player) => player.reset());
}

const stall = async (ms: number): Promise<void> => {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

const hideElements = ([...elements]: HTMLElement[]) => {
    elements.forEach((element: HTMLElement) => element.style.display = 'none');
}

const showElement = (element: HTMLElement, displayType: DisplayType) => element.style.display = displayType;

// const tileIsMarked = (tile: Tile): boolean => tile.hasChildNodes();

const switchTurn = (): void => {
    TicTacToe.turn = TicTacToe.turn === 0 ? 1 : 0;
}

const cpuTurn = () => {
    let index = Math.floor(Math.random() * unmarkedTiles.length);
    TicTacToe.turn = 1;
}

// Returns winning number combo or empty array
const playerHasWon = (player: Player): number[] => {
    let combo: number[] = [];
    winningNums.some((nums: number[]) => {
        if (nums.every((num: number) => player.getMarkedTiles.includes(num))) {
            combo = nums;
            return true;
        }

        return false;
    })

    return combo;
};


const handleTileSelect = (tile: Tile): undefined | void => {
    const player = TicTacToe.players[TicTacToe.turn];
    board.markTile(player, tile);

    if (playerHasWon(player)) {
        
    }

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
}

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

radioButtons.forEach((radio: HTMLInputElement) => {
    radio.addEventListener('change', () => {
        TicTacToe.mode = Array.from(radioButtons).find(radio => radio.checked)?.value as PlayMode;
    })
});

document.addEventListener('DOMContentLoaded', () => {
    playBtn.addEventListener('click', startGame);
})