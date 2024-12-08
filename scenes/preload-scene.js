import { BATTLE_ASSET_KEYS, BATTLE_BACKGROUND_ASSET_KEYS, HEALTH_BAR_ASSET_KEYS, MONSTER_ASSET_KEYS, UI_ASSET_KEYS } from "../dist/assets/asset-keys.js";
import Phaser from "../dist/lib/phaser.js";
import { SCENE_KEYS } from "./scenes-keys.js";

export class PreloadScene extends Phaser.Scene {
    constructor(){
        super({
            key: SCENE_KEYS.PRELOAD_SCENE,
   
        });
        console.log(SCENE_KEYS.PRELOAD_SCENE);
    }


    preload(){
        console.log(`[${PreloadScene.name}:preload] invoked`)

        const monsterTamerPath = '../assets/assets/images/monster-tamer';
        const kenneysPath = '../assets/assets/images/kenneys-assets';

        // battle background
        this.load.image(
            BATTLE_BACKGROUND_ASSET_KEYS.FOREST,
            `${monsterTamerPath}/battle-backgrounds/forest-background.png`
        );
        // battle assets
        this.load.image(
            BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND,
            `${kenneysPath}/ui-space-expansion/custom-ui.png`
        );

        // health bar
        this.load.image(
            HEALTH_BAR_ASSET_KEYS.RIGHT_CAP,
            `${kenneysPath}/ui-space-expansion/barHorizontal_green_right.png`
        );
        this.load.image(
            HEALTH_BAR_ASSET_KEYS.MIDDLE,
            `${kenneysPath}/ui-space-expansion/barHorizontal_green_mid.png`
        );
        this.load.image(
            HEALTH_BAR_ASSET_KEYS.LEFT_CAP,
            `${kenneysPath}/ui-space-expansion/barHorizontal_green_left.png`
        );
        this.load.image(
            HEALTH_BAR_ASSET_KEYS.LEFT_CAP_SHADOW,
            `${kenneysPath}/ui-space-expansion/barHorizontal_shadow_left.png`
        );
        this.load.image(
            HEALTH_BAR_ASSET_KEYS.RIGHT_CAP_SHADOW,
            `${kenneysPath}/ui-space-expansion/barHorizontal_shadow_right.png`
        );
        this.load.image(
            HEALTH_BAR_ASSET_KEYS.MIDDLE_SHADOW,
            `${kenneysPath}/ui-space-expansion/barHorizontal_shadow_mid.png`
        );

        // Monster assets
        this.load.image(
            MONSTER_ASSET_KEYS.IGUANIGNITE,
            `${monsterTamerPath}/monsters/iguanignite.png`
        );
        this.load.image(
            MONSTER_ASSET_KEYS.CARNODUSK,
            `${monsterTamerPath}/monsters/carnodusk.png`
        );
        this.load.image(
            MONSTER_ASSET_KEYS.JIVY,
            `${monsterTamerPath}/monsters/jivy.png`
        );
        this.load.image(
            MONSTER_ASSET_KEYS.PARAZOID,
            `${monsterTamerPath}/monsters/parazoid.png`
        );
        this.load.image(
            MONSTER_ASSET_KEYS.FROSTSABER,
            `${monsterTamerPath}/monsters/frostsaber.png`
        );

        // Ui Assets
        this.load.image(
            UI_ASSET_KEYS.CURSOR,
            `${monsterTamerPath}/ui/cursor.png`
        );
    }

    create(){
        
        console.log(`[${PreloadScene.name}:create] invoked`)
        this.scene.start(SCENE_KEYS.BATTLE_SCENE);
    }

}