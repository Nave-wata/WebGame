import Phaser from "phaser";
import Player from "../../components/player";
import Platform from "../../components/platform";

let gameOver = false;

export class Scene extends Phaser.Scene {
    player: Player;
    platform: Platform;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;

    constructor() {
        super("game");

        this.player = new Player(this);
        this.platform = new Platform(this);
    }

    /**
     * assetsの読み込み
     */
    preload() {
        this.player.preload();
        this.platform.preload();
    }

    /**
     * シーンにオブジェクトを配置
     */
    create() {
        const width = this.scale.width;
        const height = this.scale.height;
        const stage = {
            x: 0,
            y: 0,
            width: width * 4,
            height: height,
        };

        this.physics.world.setBounds(stage.x, stage.y, stage.width, stage.height);
        this.cameras.main.setBounds(stage.x, stage.y, stage.width, stage.height);

        this.player.create(100, height - 100, this.platform.platform);

        for (let i = 0; i < stage.width; i += 40) {
            if (300 < i && Math.floor(Math.random() * 6) === 0) {
                i += 120;
            }
            this.platform.create(i, height - 20);
        }

        if (this.input.keyboard !== null) {
            this.cursors = this.input.keyboard.createCursorKeys();
        }

        this.physics.add.collider(
            this.player.player as Phaser.Physics.Arcade.Sprite,
            this.platform.platform as Phaser.Physics.Arcade.StaticGroup
        );

        gameOver = true;
    }

    /**
     * ゲームの更新処理
     */
    update() {
        if (this.cursors === undefined) {
            return;
        }

        this.player.update(this.cursors);
    }
}
