export default class Player {
    constructor(marker, markedTiles = []) {
        this.marker = marker;
        this.markedTiles = markedTiles;
    }
    markTile(tile) {
        this.markedTiles.push(tile);
        const img = document.createElement('img');
        img.src = 'images/' + this.marker;
        img.classList.add('marker');
        tile.appendChild(img);
        this.markedTiles = this.markedTiles.sort((a, b) => Number(a.id) - Number(b.id));
    }
    get getMarkedTiles() {
        let ids = [];
        this.markedTiles.forEach((tile) => ids.push(Number(tile.id)));
        return ids;
    }
    reset() {
        this.markedTiles = [];
    }
}
