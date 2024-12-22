export default class Tile {
    constructor(element, id = Number(element.id)) {
        this.element = element;
        this.id = id;
    }
}
