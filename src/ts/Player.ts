type Marker = 'x' | 'o';

export default class Player {
    constructor (
        readonly marker: Marker,
        public markedTiles: HTMLDivElement[] = []
    ) {}

    markTile (tile: HTMLDivElement): void {
        this.markedTiles.push(tile);
        (tile.firstElementChild as HTMLParagraphElement).innerText = this.marker;
    }

    sortMarkedTiles () {

    }
}