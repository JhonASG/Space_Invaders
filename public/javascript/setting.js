export class LoadingAssetsGame {
    constructor() {}
    
    loadingAssets (name, url, frameW, frameH) {
        this.load.spritesheet(
            name,
            url,
            {
                frameWidth: frameW,
                frameHeight: frameH
            }
        );
    }

    AddAssetsGame (){
        this.loadingAssets(
            'avatarA',
            'https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FInvaderA_00%402x.png?v=1589228669385',
            48,
            32
        );

        this.loadingAssets(
            'avatarB',
            'https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FInvaderB_00%402x.png?v=1589228660870',
            48,
            32
        );

        this.loadingAssets(
            'avatarC',
            'https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FInvaderC_00%402x.png?v=1589228654058',
            48,
            32
        );

        this.loadingAssets(
            'avatarAgreen',
            'https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FinvaderAgreen.png?v=1589839188589',
            48,
            48
        );

        this.loadingAssets(
            'avatarAcyan',
            'https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FinvaderAcyan.png?v=1589839190850',
            48,
            48
        );

        this.loadingAssets(
            'avatarAyellow',
            'https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FinvaderAyellow.png?v=1589839197191',
            48,
            48
        );

        this.loadingAssets(
            'avatarBgreen',
            'https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FinvaderBgreen.png?v=1589839187283',
            48,
            48,
        );

        this.loadingAssets(
            'avatarBcyan',
            'https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FinvaderBcyan.png?v=1589839193162',
            48,
            48,
        );

        this.loadingAssets(
            'avatarByellow',
            'https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FinvaderByellow.png?v=1589839195096',
            48,
            48,
        );

        this.loadingAssets(
            'avatarCgreen',
            'https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FinvaderCgreen.png?v=1589839203129',
            48,
            48,
        );

        this.loadingAssets(
            'avatarCcyan',
            'https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FinvaderCcyan.png?v=1589839200959',
            48,
            48,
        );

        this.loadingAssets(
            'avatarCyellow',
            'https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FinvaderCyellow.png?v=1589839198988',
            48,
            48,
        );

        this.loadingAssets(
            'ship',
            'https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FShip%402x.png?v=1589228730678',
            60,
            32,
        );

        this.loadingAssets(
            'bullet',
            'https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2Fbullet.png?v=1589229887570',
            32,
            48,
        );
        
        this.loadingAssets(
            'explosion',
            'https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2Fexplosion57%20(2).png?v=1589491279459',
            48,
            48,
        );
    }
}