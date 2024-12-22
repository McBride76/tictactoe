import Tile from "./Tile";

export default class Board {

    constructor (
        private tiles: Array<Tile>,
    ) {}

    public setTileBgColor = (tile: HTMLDivElement, rgb: string) => tile.style.backgroundColor = rgb;

    public reset () {
        this.tiles.forEach((tile: Tile) => this.resetTile(tile));
    }

    public toggleTileBgColor = (e: MouseEvent) => {
        const tile = e.target as Tile;
        if (tileIsMarked(tile)) {
            setTileBgColor(tile, 'rgb(255, 255, 255)');
        } else {
            let color = tile.style.backgroundColor === 'rgb(255, 255, 255)' ? 'rgb(248, 251, 255)' : 'rgb(255, 255, 255)';
            setTileBgColor(tile, color);
        }
    }

    private addHoverEventListener (tile: HTMLDivElement) {
        tile.removeEventListener('mouseenter', this.toggleTileBgColor);
        tile.removeEventListener('mouseleave', this.toggleTileBgColor);
        tile.addEventListener('mouseenter', this.toggleTileBgColor);
        tile.addEventListener('mouseleave', this.toggleTileBgColor);
    }

    private resetTile(tile: Tile) {
        tile.firstElementChild?.remove();
        tile.style.backgroundColor = 'rgb(255, 255, 255)';
        this.addHoverEventListener(tile);
        tile.addEventListener('click', tileClick);
    }
}