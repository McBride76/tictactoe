export default class Tile {
    constructor(element) {
        this.element = element;
    }
    get id() {
        return Number(this.element.id);
    }
    mark(player) {
        if (!this.isMarked()) {
            player.markTile(this.id);
            this.element.appendChild(player.getMarker);
        }
    }
    reset() {
        var _a;
        (_a = this.element.firstElementChild) === null || _a === void 0 ? void 0 : _a.remove();
        this.element.style.backgroundColor = 'rgb(255, 255, 255)';
    }
    isMarked() {
        return this.element.hasChildNodes();
    }
    highlight() {
        this.element.style.backgroundColor = 'blue';
    }
}
