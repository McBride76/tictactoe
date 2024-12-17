export default class Player {
    constructor(marker, markedTiles = []) {
        this.marker = marker;
        this.markedTiles = markedTiles;
    }
    markTile(tile) {
        this.markedTiles.push(tile);
    }
}
