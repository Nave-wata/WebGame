import { Scene } from "./stages/main/Scene";

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: "phaser-container",
    backgroundColor: "#DDD",
    scale: {
        mode: Phaser.Scale.ScaleModes.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: window.innerWidth,
        height: window.innerHeight,
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 500 },
            debug: false,
        },
    },
    scene: [Scene],
};

export default new Phaser.Game(config);
