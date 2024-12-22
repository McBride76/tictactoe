export default class Player {
    constructor(name, marker, markedTiles = []) {
        this.name = name;
        this.marker = marker;
        this.markedTiles = markedTiles;
    }
    markTile(tileID) {
        this.markedTiles.push(tileID);
        this.markedTiles = this.markedTiles.sort((a, b) => a - b);
    }
    get getMarker() {
        const img = document.createElement('img');
        img.src = 'images/' + this.marker;
        img.classList.add('marker');
        return img;
    }
    get getMarkedTiles() {
        return this.markedTiles;
    }
    reset() {
        this.markedTiles = [];
    }
}
