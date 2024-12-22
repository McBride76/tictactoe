type Marker = 'ned.png' | 'ned2.png' | 'ponky.png';

export default class Player {
    constructor (
        readonly name: string,
        private readonly marker: Marker,
        private markedTiles: number[] = []
    ) {}

    public markTile (tileID: number): void {
        this.markedTiles.push(tileID);
        this.markedTiles = this.markedTiles.sort((a, b) => a - b);
    }

    public get getMarker (): HTMLImageElement {
        const img = document.createElement('img');
        img.src = 'images/' + this.marker;
        img.classList.add('marker');
        return img;
    }

    public get getMarkedTiles (): number[] {
        return this.markedTiles;
    }

    public reset() {
        this.markedTiles = [];
    }
}