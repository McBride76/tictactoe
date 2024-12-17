type Marker = 'x' | 'o';

export default class Player {
    constructor (
        readonly marker: Marker,
        public markedTiles: HTMLDivElement[] = []
    ) {}

    markTile (tile: HTMLDivElement) {
        this.markedTiles.push(tile);
    }
}