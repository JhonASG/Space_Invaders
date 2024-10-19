import { LoadingAssetsGame } from './setting.js';

class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameScene'
        });
    }

    preload () {
        const assetsGame = new LoadingAssetsGame();
        assetsGame.AddAssetsGame();
    }

    create () {
        this.anims.create({
            key: 'explosion',
            frames: this.anims.generateFrameNumbers('explosion', {
                start: 0,
                end: 11
            }),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });
    }

    update () {}
}

const config = {
    width: 1400,
    height: 750,
    backgroundColor: 0xffffff,
    parent: 'gameContainer',
    scene: [GameScene],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
};