import Player from "./Player";

export default class Tile {

    constructor (
        public element: HTMLDivElement
    ) {}

    public get id (): number {
        return Number(this.element.id)
    }

    public mark (player: Player): void {
        if (! this.isMarked()) {
            player.markTile(this.id);
            this.element.appendChild(player.getMarker);
        }
    }

    public reset () {
        this.element.firstElementChild?.remove();
        this.element.style.backgroundColor = 'rgb(255, 255, 255)';
    }

    public isMarked (): boolean {
        return this.element.hasChildNodes();
    }

    public highlight () {
        this.element.style.backgroundColor = 'blue';
    }
}