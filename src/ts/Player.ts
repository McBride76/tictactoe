type Marker = 'ned.png' | 'ned2.png' | 'ponky.png';

export default class Player {
    constructor (
        readonly name: string,
        readonly marker: Marker,
        private markedTiles: HTMLDivElement[] = []
    ) {}

    public markTile (tile: HTMLDivElement): void {
        this.markedTiles.push(tile);
        const img = document.createElement('img');
        img.src = this.getMarker;
        img.classList.add('marker');
        tile.appendChild(img);
        this.markedTiles = this.markedTiles.sort((a, b) => Number(a.id) - Number(b.id));
    }

    public get getMarker (): string {
        return 'images/' + this.marker;
    }

    public get getMarkedTiles (): number[] {
        let ids: number[] = [];
        this.markedTiles.forEach((tile: HTMLDivElement) => ids.push(Number(tile.id)));
        return ids;
    }

    public reset() {
        this.markedTiles = [];
    }
}