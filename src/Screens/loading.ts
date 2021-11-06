import { Game, State, Text } from "phaser-ce";

const enum LoadingState {
    INITIAL = "",
    IMAGES = "Images ...",
    AUDIO = "Audio ...",
    COMPLETE = "Complete!",
}

/**
 * TOOD: Consider a Loader singleton that can dynamically
 * loadingText assets depending on the state/requirements ...
 */

class Loading extends State {
    private loadingState = LoadingState.INITIAL;
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

        this.loadingStateText = this.game.add.text(
            this.game.width / 2,
            this.loadingText.y + this.loadingText.height,
            LoadingState.INITIAL,
            {
                fill: "#FFFFFF",
                fontSize: 30,
            }
        );

        this.loadingText.x -= this.loadingText.width / 2;
        this.loadingText.y -= this.loadingText.height / 2;

        this.loadingStateText.x -= this.loadingStateText.width / 2;
        this.loadingStateText.y -= this.loadingStateText.height / 2;

        // Organize your assets here ...

        // DELETE ME ...
        // Just experimenting with loading state ...
        setTimeout(() => {
            this.loadingStateText.setText(`Loading ${LoadingState.IMAGES}`);
            this.loadingStateText.x =
                this.game.width / 2 - this.loadingStateText.width / 2;
        }, 1000);
        setTimeout(() => {
            this.loadingStateText.setText(`Loading ${LoadingState.AUDIO}`);
            this.loadingStateText.x =
                this.game.width / 2 - this.loadingStateText.width / 2;
        }, 2000);
        setTimeout(() => {
            this.loadingStateText.setText(`Loading ${LoadingState.COMPLETE}`);
            this.loadingStateText.x =
                this.game.width / 2 - this.loadingStateText.width / 2;
        }, 3000);
        setTimeout(() => {
            console.log("Start Game!");
        }, 5000);
    }
}

export default Loading;
