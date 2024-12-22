export default class Board {
    constructor(tiles) {
        this.tiles = tiles;
        this.setTileBgColor = (tile, rgb) => tile.style.backgroundColor = rgb;
        this.toggleTileBgColor = (e) => {
            const tile = e.target;
            if (tileIsMarked(tile)) {
                setTileBgColor(tile, 'rgb(255, 255, 255)');
            }
            else {
                let color = tile.style.backgroundColor === 'rgb(255, 255, 255)' ? 'rgb(248, 251, 255)' : 'rgb(255, 255, 255)';
                setTileBgColor(tile, color);
            }
        };
    }
    reset() {
        this.tiles.forEach((tile) => this.resetTile(tile));
    }
    addHoverEventListener(tile) {
        tile.removeEventListener('mouseenter', this.toggleTileBgColor);
        tile.removeEventListener('mouseleave', this.toggleTileBgColor);
        tile.addEventListener('mouseenter', this.toggleTileBgColor);
        tile.addEventListener('mouseleave', this.toggleTileBgColor);
    }
    resetTile(tile) {
        var _a;
        (_a = tile.firstElementChild) === null || _a === void 0 ? void 0 : _a.remove();
        tile.style.backgroundColor = 'rgb(255, 255, 255)';
        this.addHoverEventListener(tile);
        tile.addEventListener('click', tileClick);
    }
}
