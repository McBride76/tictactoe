import Player from "./Player.js";

const PlayerOne = new Player('x');
const PlayerTwo = new Player('o');

const radioButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="playOption"]')!;
const tiles: NodeListOf<HTMLDivElement> = document.querySelectorAll('.tile')!;

const winningNums = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 5, 9], [1, 4, 7], [2, 5, 8],
    [3, 6, 9]
];

type PlayMode = 'CPU' | 'PVP';

type Tile = HTMLParagraphElement | HTMLDivElement;

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

const checkForWin = (player: Player): boolean => {
    const playerTiles = player.getMarkedTiles;
    return winningNums.some((combo: number[]) => {
        return combo.every((num: number) => playerTiles.includes(num))
    });
}

const stall = async (ms: number): Promise<void> => {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

const tileIsMarked = (tile: Tile): boolean => tile instanceof HTMLParagraphElement;

const switchTurn = (): void => {
    TicTacToe.turn = TicTacToe.turn === 0 ? 1 : 0;
}

const handleTileSelect = (e: MouseEvent): undefined | void => {
    if (tileIsMarked(e.target as Tile)) return;
    
    const tile = e.target as HTMLDivElement;
    const player = TicTacToe.players[TicTacToe.turn];

    player.markTile(tile);

    if (checkForWin(player)) {
        alert(`${player.marker} has won!`);
    } else {
        switchTurn();
    }
}

radioButtons.forEach((radio: HTMLInputElement) => {
    radio.addEventListener('change', () => {
        TicTacToe.mode = Array.from(radioButtons).find(radio => radio.checked)?.value as PlayMode;
    })
});

tiles.forEach((tile: HTMLDivElement) => {
    tile.addEventListener('mouseover', (e: MouseEvent) => {
        if (! tileIsMarked(e.target as Tile)) {
            tile.style.backgroundColor = '#fafcff';
        }
    })
    tile.addEventListener('mouseout', () => tile.style.backgroundColor = '#ffffff');
    tile.addEventListener('click', handleTileSelect);
});