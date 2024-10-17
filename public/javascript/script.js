class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameScene'
        });
    }

    preload () {}
    create () {}
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