const radioButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="playOption"]')!;
const tiles: NodeListOf<HTMLDivElement> = document.querySelectorAll('.tile')!;

type PlayMode = 'CPU' | 'PVP';

type Game = {
    mode: PlayMode,
    inMatch: boolean
};

const TicTacToe: Game = {
    mode: 'CPU',
    inMatch: false
};

radioButtons.forEach((radio: HTMLInputElement) => {
    radio.addEventListener('change', () => {
        TicTacToe.mode = Array.from(radioButtons).find(radio => radio.checked)?.value as PlayMode;
    })
});

tiles.forEach((tile: HTMLDivElement) => {
    tile.addEventListener('mouseover', (e: MouseEvent) => {
        let p = e.target as HTMLParagraphElement;
        if (p.innerText === "") {
            tile.style.backgroundColor = '#fafcff';
        }
    })

    tile.addEventListener('mouseout', (e: MouseEvent) => tile.style.backgroundColor = '#ffffff');
});