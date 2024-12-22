import Player from "./Player";

export default class Tile {

    constructor (
        private element: HTMLDivElement,
        private readonly id: number = Number(element.id)
    ) {}

    
}