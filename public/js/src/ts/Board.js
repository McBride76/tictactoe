export default class Board {
    constructor(tiles) {
        this.tiles = tiles;
        this.setTileBgColor = (tile, rgb) => tile.style.backgroundColor = rgb;
    }
    markTile(player, tile) {
        tile.mark(player);
    }
    reset() {
        this.tiles.forEach((tile) => tile.reset());
    }
    get unmarkedTiles() {
        return this.tiles.filter((tile) => (!tile.isMarked())).map(tile => tile.id);
    }
}
