import { Text, State } from "phaser-ce";

/**
 * TOOD: Consider a Loader singleton that can dynamically
 * loadingText assets depending on the state/requirements ...
 */

class Loading extends State {
    private loadingText: Text;
    private loadingStateText: Text;

    constructor() {
        super();
    }

    create() {
        this.loadingText = this.game.add.text(
            this.game.width / 2,
            this.game.height / 2,
            "Initializing Loader",
            {
                fill: "#FFFFFF",
                fontSize: 50,
            }
        );
        this.loadingText.anchor.set(0.5, 0.5);

        // Setup loader callbacks ...

        this.game.load.onLoadStart.add(this.loadStart, this);
        this.game.load.onFileComplete.add(this.fileComplete, this);
        this.game.load.onLoadComplete.add(this.loadComplete, this);

        // Organize your assets here ...

        this.game.load.image("default", "../assets/default.png");

        // Begin load ...

        this.game.load.start();
    }

    private loadStart() {
        console.log("Started Loading ...");
    }

    private fileComplete(progress: number) {
        console.log(`Game is %${progress} complete ...`);
    }

    private loadComplete() {
        console.log("Loading done! Starting game ...");

        this.game.state.start("game");
    }
}

export default Loading;
