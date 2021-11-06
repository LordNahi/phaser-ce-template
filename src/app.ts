import "pixi";
import "p2";
import Phaser, { IGameConfig } from "phaser-ce";

const config: IGameConfig = {
    width: 1024,
    height: 768,
    parent: "game",
};

class Game extends Phaser.Game {
    constructor(config: IGameConfig) {
        super(config);
    }
}

window.onload = () => {
    const game = new Game(config);
};
