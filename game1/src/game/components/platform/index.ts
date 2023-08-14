import Phaser from "phaser";
import { PLATFORM_IMG, PLATFORM_KEY } from "../../constants/platform";

export default class Platform {
    self: Phaser.Scene;
    platform: Phaser.Physics.Arcade.StaticGroup | undefined;

    constructor(self: Phaser.Scene) {
        this.self = self;
    }

    preload() {
        this.self.load.image(PLATFORM_KEY, PLATFORM_IMG);
    }

    create(x: number, y: number, scale?: number) {
        if (this.platform === undefined) {
            this.platform = this.self.physics.add.staticGroup();
        }

        if (scale === undefined) {
            this.platform.create(x, y, PLATFORM_KEY);
        } else {
            this.platform.create(x, y, PLATFORM_KEY).setScale(scale).refreshBody();
        }
    }
}
