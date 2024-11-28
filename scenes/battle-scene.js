import {BATTLE_BACKGROUND_ASSET_KEYS, MONSTER_ASSET_KEYS} from "../dist/assets/asset-keys.js";
import Phaser from "../dist/lib/phaser.js";
import { SCENE_KEYS } from "./scenes-keys.js";

export class BattleScene extends Phaser.Scene {
    constructor(){
        super({
            key: SCENE_KEYS.BATTLE_SCENE,
        });
    }


    create(){
        console.log(`[${BattleScene.name}:create] invoked`)

        // Create main background
        this.add.image(0,0,BATTLE_BACKGROUND_ASSET_KEYS.FOREST).setOrigin(0);

        // render monster & player
        this.add.image(768, 140, MONSTER_ASSET_KEYS.JIVY, 0);
        this.add.image(256, 316, MONSTER_ASSET_KEYS.FROSTSABER, 0).setFlipX(true);
    }

}