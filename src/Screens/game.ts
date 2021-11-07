import { State, Image } from "phaser-ce";

class Game extends State {
    private titleGraphic: Image;

    constructor() {
        super();
    }

    create() {
        this.stage.setBackgroundColor("#FFAF55");

        // Demonstrate loading an image ...

        this.titleGraphic = this.game.add.image(
            this.game.width / 2,
            this.game.height / 2,
            "default"
        );
        this.titleGraphic.anchor.set(0.5, 0.5);

        // Add some flashy tweens ...

        this.game.add
            .tween(this.titleGraphic.scale)
            .to(
                { x: 1.2, y: 1.2 },
                1000,
                Phaser.Easing.Sinusoidal.InOut,
                true,
                0,
                -1,
                true
            );

        this.game.add
            .tween(this.titleGraphic)
            .to(
                { angle: 10 },
                2000,
                Phaser.Easing.Sinusoidal.InOut,
                true,
                0,
                -1,
                true
            );
    }
}

export default Game;
