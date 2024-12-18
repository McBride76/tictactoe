type Marker = 'x' | 'o';

export default class Player {
    constructor (
        readonly marker: Marker,
        private markedTiles: HTMLDivElement[] = []
    ) {}

    public markTile (tile: HTMLDivElement): void {
        this.markedTiles.push(tile);
        (tile.firstElementChild as HTMLParagraphElement).innerText = this.marker;
        this.markedTiles = this.markedTiles.sort((a, b) => Number(a.id) - Number(b.id));
    }

    get getMarkedTiles (): number[] {
        let ids: number[] = [];
        this.markedTiles.forEach((tile: HTMLDivElement) => ids.push(Number(tile.id)));
        return ids;
    }

    public reset() {
        this.markedTiles = [];
    }
}