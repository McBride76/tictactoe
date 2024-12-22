import Player from "./Player";

export default class Tile {

    constructor (
        public element: HTMLDivElement
    ) {}

    public get id (): number {
        return Number(this.element.id)
    }

    public mark (player: Player) {
        player.markTile(this.id);
        this.element.appendChild(player.getMarker);
    }

    public reset () {
        this.element.firstElementChild?.remove();
        this.element.style.backgroundColor = 'rgb(255, 255, 255)';
    }

    private isMarked (): boolean {
        return this.element.hasChildNodes();
    }

}