import "pixi";
import "p2";
import Phaser, { IGameConfig } from "phaser-ce";

import LoadingScreen from "./screens/loading";
import GameScreen from "./screens/game";

const defaultConfig: IGameConfig = {
    width: 1024,
    height: 768,
    parent: "game",
    renderer: Phaser.AUTO,
};

class Game extends Phaser.Game {
    constructor(config: IGameConfig) {
        super(config);

        // Prepare Loading Stack ...
        this.state.add("loading", LoadingScreen);
        this.state.add("game", GameScreen);

        // Kick off loader ...
        this.state.start("loading");
    }
}

window.onload = () => {
    new Game(defaultConfig);
};
