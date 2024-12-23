import Player from "./Player";
import Tile from "./Tile";

export default class Board {

    constructor ( private tiles: Array<Tile> ) {}

    public markTile (player: Player, tile: Tile) {
        tile.mark(player);
    }

    public setTileBgColor = (tile: HTMLDivElement, rgb: string) => tile.style.backgroundColor = rgb;

    public reset () {
        this.tiles.forEach((tile: Tile) => tile.reset());
    }

    public get unmarkedTiles (): number[] {
        return this.tiles.filter((tile: Tile) => (! tile.isMarked())).map(tile => tile.id);
    }
}