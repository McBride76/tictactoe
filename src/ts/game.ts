const radioButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="playOption"]')!;

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