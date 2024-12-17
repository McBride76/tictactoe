const radioButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="playOption"]')!;
const tiles: NodeListOf<HTMLDivElement> = document.querySelectorAll('.tile')!;

type PlayMode = 'CPU' | 'PVP';

type Tile = HTMLParagraphElement | HTMLDivElement;

type Game = {
    mode: PlayMode,
    inMatch: boolean
};

const TicTacToe: Game = {
    mode: 'CPU',
    inMatch: false
};

const tileIsMarked = (tile: Tile): boolean => tile instanceof HTMLParagraphElement;

const handleTileSelect = (e: MouseEvent): undefined | void => {
    if (tileIsMarked(e.target as Tile)) return;
    if (TicTacToe.mode === 'CPU') {
        console.log("CPU turn");
    } else {
        console.log("Player 2 Turn");
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