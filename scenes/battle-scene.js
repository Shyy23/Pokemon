import {BATTLE_ASSET_KEYS, BATTLE_BACKGROUND_ASSET_KEYS, MONSTER_ASSET_KEYS} from "../dist/assets/asset-keys.js";
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

        // render player health bar
        const playerMonsterName = this.add.text(
            30,
            20,
            MONSTER_ASSET_KEYS.JIVY, {
                color: '#7e3d3f',
                fontSize: '32px'
            }
        ); 
        this.add.container(556, 318, [
            this.add.image(0,0, BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND)
            .setOrigin(0),
            playerMonsterName]);
    }

}