export default class Player {
    constructor(name, marker, markedTiles = []) {
        this.name = name;
        this.marker = marker;
        this.markedTiles = markedTiles;
    }
    markTile(tile) {
        this.markedTiles.push(tile);
        const img = document.createElement('img');
        img.src = this.getMarker;
        img.classList.add('marker');
        tile.appendChild(img);
        this.markedTiles = this.markedTiles.sort((a, b) => Number(a.id) - Number(b.id));
    }
    get getMarker() {
        return 'images/' + this.marker;
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
