import Player from "./Player.js";

const PlayerOne = new Player('ned2.png');
const PlayerTwo = new Player('ponky.png');

const radioButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="playOption"]')!;
const tiles: NodeListOf<HTMLDivElement> = document.querySelectorAll('.tile')!;

const playBtnModal: HTMLElement = document.getElementById('playBtnModal')!;
const playBtn: HTMLElement = document.getElementById('playBtn')!;

const playerImgModal: HTMLElement = document.getElementById('imgDiv')!;
const playerImg: HTMLElement = document.getElementById('playerImg')!;

const winningNums = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 5, 9], [1, 4, 7], [2, 5, 8],
    [3, 6, 9], [3, 5, 7]
];

type PlayMode = 'CPU' | 'PVP';

type Tile = HTMLDivElement;

type DisplayType = 'block' | 'flex';

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

const highlightWinningTiles = (tileNums: number[]) => {
    tileNums.forEach((id: number) => {
        tiles[id - 1].removeEventListener('mouseenter', toggleTileBgColor);
        tiles[id - 1].removeEventListener('mouseleave', toggleTileBgColor);
        tiles[id - 1].style.backgroundColor = 'blue'
    });
}

// const showPlayerImg = () => {
//     playerImgModal.style.display = 'flex';
//     playerImg.style.display = 'block';
//     //ponky.style.width = '400px';
//     ponky.classList.add('animate');
// }

// const hidePlayerImg = () => {
//     ponkyModal.style.display = 'none';
//     ponky.style.display = 'none';
//     ponky.style.width = '100px'
// }

const playerWinCombo = (player: Player): number[] => {
    const playerTiles = player.getMarkedTiles;
    let winCombo: number[] = [];
    winningNums.some((combo: number[]) => {
        if (combo.every((num: number) => playerTiles.includes(num))) {
            winCombo = combo;
            return true;
        }
        return false;
    });

    return winCombo;
}

const startGame = () => {
    hideElements([playBtnModal, playerImgModal]);

    //hidePonky();

    tiles.forEach((tile: HTMLDivElement) => {
        tile.style.backgroundColor = 'rgb(255, 255, 255)';
        tile.removeEventListener('mouseenter', toggleTileBgColor);
        tile.removeEventListener('mouseleave', toggleTileBgColor);
        tile.addEventListener('mouseenter', toggleTileBgColor);
        tile.addEventListener('mouseleave', toggleTileBgColor);
        tile.addEventListener('click', handleTileSelect);
    })

    TicTacToe.players.forEach((player: Player) => player.reset());
}

const stall = async (ms: number): Promise<void> => {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

const hideElements = ([...elements]: HTMLElement[]) => {
    elements.forEach((element: HTMLElement) => element.style.display = 'none');
}

const showElement = (element: HTMLElement, displayType: DisplayType) => element.style.display = displayType;

const tileIsMarked = (tile: Tile): boolean => tile.hasChildNodes();

const switchTurn = (): void => {
    TicTacToe.turn = TicTacToe.turn === 0 ? 1 : 0;
}

const resetTile = (tile: HTMLDivElement) => {

}

const handleWin = (player: Player, winningTiles: number[]) => {
    highlightWinningTiles(winningTiles);
    // playBtnModal.classList.remove('display-none');
    // playBtn.addEventListener('click', startGame);
    //showPonky();
}

const handleTileSelect = (e: MouseEvent): undefined | void => {
    if (tileIsMarked(e.target as Tile)) return;
    
    const tile = e.target as HTMLDivElement;
    const player = TicTacToe.players[TicTacToe.turn];

    player.markTile(tile);

    let winCombo = playerWinCombo(player); 
    winCombo.length > 0 ? handleWin(player, winCombo) : switchTurn();
}

const setTileBgColor = (tile: HTMLDivElement, rgb: string) => tile.style.backgroundColor = rgb;

const toggleTileBgColor = (e: MouseEvent) => {
    const tile = e.target as Tile;
    if (tileIsMarked(tile)) {
        setTileBgColor(tile, 'rgb(255, 255, 255)');
    } else {
        let color = tile.style.backgroundColor === 'rgb(255, 255, 255)' ? 'rgb(248, 251, 255)' : 'rgb(255, 255, 255)';
        setTileBgColor(tile, color);
    }
}

radioButtons.forEach((radio: HTMLInputElement) => {
    radio.addEventListener('change', () => {
        TicTacToe.mode = Array.from(radioButtons).find(radio => radio.checked)?.value as PlayMode;
    })
});

document.addEventListener('DOMContentLoaded', () => {
    startGame();
})