export default class Player {
    constructor(marker, markedTiles = []) {
        this.marker = marker;
        this.markedTiles = markedTiles;
    }
    markTile(tile) {
        this.markedTiles.push(tile);
        tile.firstElementChild.innerText = this.marker;
    }
    get getMarkedTiles() {
        const sorted = [];
        let sortedTiles = this.markedTiles.sort((a, b) => Number(a.id) - Number(b.id));
        sortedTiles.forEach((tile) => sorted.push(Number(tile.id)));
        return sorted;
    }
}
