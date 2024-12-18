type Marker = 'x' | 'o';

export default class Player {
    constructor (
        readonly marker: Marker,
        private markedTiles: HTMLDivElement[] = []
    ) {}

    markTile (tile: HTMLDivElement): void {
        this.markedTiles.push(tile);
        (tile.firstElementChild as HTMLParagraphElement).innerText = this.marker;
    }

    get getMarkedTiles (): number[] {
        const sorted: number[] = [];
        let sortedTiles = this.markedTiles.sort((a, b) => Number(a.id) - Number(b.id));
        sortedTiles.forEach((tile: HTMLDivElement) => sorted.push(Number(tile.id)));
        return sorted;
    }
}