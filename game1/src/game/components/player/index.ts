import Phaser from "phaser";
import {
    MOVE_LEFT,
    MOVE_RIGHT,
    MOVE_TURN,
    PLAYER_FRAME_HEIGHT,
    PLAYER_FRAME_WIDTH,
    PLAYER_IMG,
    PLAYER_KEY,
    VELOCITY_RIGHT,
    VELOCITY_LEFT,
    VELOCITY_JUMP,
} from "../../constants/player";

export default class Player {
    self: Phaser.Scene;
    player: Phaser.Physics.Arcade.Sprite | undefined;

    constructor(self: Phaser.Scene) {
        this.self = self;
    }

    preload() {
        this.self.load.spritesheet(PLAYER_KEY, PLAYER_IMG, {
            frameWidth: PLAYER_FRAME_WIDTH,
            frameHeight: PLAYER_FRAME_HEIGHT,
        });
    }

    create(x: number, y: number, platform?: Phaser.Physics.Arcade.StaticGroup) {
        const height = this.self.scale.height;
        this.player = this.self.physics.add.sprite(x, y, PLAYER_KEY);
        this.self.cameras.main.startFollow(this.player, true, 1, 0, 0, -height / 12);

        this.self.anims.create({
            key: MOVE_LEFT,
            frames: this.self.anims.generateFrameNumbers(PLAYER_KEY, { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1,
        });

        this.self.anims.create({
            key: MOVE_TURN,
            frames: [{ key: PLAYER_KEY, frame: 4 }],
            frameRate: 20,
        });

        this.self.anims.create({
            key: MOVE_RIGHT,
            frames: this.self.anims.generateFrameNumbers(PLAYER_KEY, { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1,
        });

        if (platform !== undefined) {
            this.self.physics.add.collider(this.player, platform);
        }
    }

    update(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
        if (this.player === undefined) {
            return;
        }

        if (this.self.scale.height - this.player.y < 0) {
            this.self.scene.stop("game");
            return;
        }

        if (cursors.left.isDown) {
            this.player.setVelocityX(VELOCITY_LEFT);
            this.player.anims.play(MOVE_LEFT, true);
        } else if (cursors.right.isDown) {
            this.player.setVelocityX(VELOCITY_RIGHT);
            this.player.anims.play(MOVE_RIGHT, true);
        } else {
            this.player.setVelocityX(0);
            this.player.anims.play(MOVE_TURN);
        }

        if (this.player.body === undefined || this.player.body === null) {
            return;
        }

        if (cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(VELOCITY_JUMP);
        }
    }
}
