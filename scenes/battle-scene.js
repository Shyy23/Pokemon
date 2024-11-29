

import {BATTLE_ASSET_KEYS, BATTLE_BACKGROUND_ASSET_KEYS, HEALTH_BAR_ASSET_KEYS, MONSTER_ASSET_KEYS} from "../dist/assets/asset-keys.js";

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

            playerMonsterName,
        this.#createHealthBar(34,34),
        this.add.text(
            playerMonsterName.width + 35,
            23,
            'L5', {
                color: '#ED474B',
                fontSize: '28px'
            }),
            this.add.text(
                37,
                59,
                'HP', {
                    color: '#FF6505',
                    fontSize: '20px',
                    fontStyle: 'italic'
                       
                }),  
            this.add.text(
                440,
                80,
                '25/25', {
                    color: '#7E3D3F',
                    fontSize: '16px',
                }).setOrigin(1, 0),  
            ]);

            //render enemy health 
        const enemyMonsterName = this.add.text(
            30,
            20,
            MONSTER_ASSET_KEYS.FROSTSABER, {
                color: '#7e3d3f',
                fontSize: '32px'
            }
        ); 
        this.add.container(0, 0, [
            this.add.image(0,0, BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND)
            .setOrigin(0)
            .setScale(1, 0.8),
            enemyMonsterName,
        this.#createHealthBar(34,34),
        this.add.text(
            enemyMonsterName.width + 35,
            23,
            'L5', {
                color: '#ED474B',
                fontSize: '28px'
            }),
            this.add.text(
                37,
                59,
                'HP', {
                    color: '#FF6505',
                    fontSize: '20px',
                    fontStyle: 'italic'
                       
                }),  
 
            ]);

            // render main info pane
            this.#createMainInfoPane();
            this.#createMainInfoSubPane();
    }

    #createHealthBar(x, y){
        const scaleY = 0.7;
        const leftCap = this.add.image(x, y, HEALTH_BAR_ASSET_KEYS.LEFT_CAP).setOrigin(0, 0.5).setScale(1, scaleY);
        const middle = this.add.image(leftCap.x + leftCap.width, y, HEALTH_BAR_ASSET_KEYS.MIDDLE).setOrigin(0, 0.5).setScale(1, scaleY);
        middle.displayWidth = 360;
        const rightCap = this.add.image(middle.x + middle.displayWidth, y, HEALTH_BAR_ASSET_KEYS.RIGHT_CAP).setOrigin(0, 0.5).setScale(1, scaleY);
        return this.add.container(x, y, [leftCap, middle, rightCap]);
    }

    #createMainInfoPane(){
        const rectHeight = 124;
        const padding = 4;
        this.add.rectangle(
            padding, 
            this.scale.height - rectHeight - padding,
            this.scale.width - padding * 2,
            rectHeight,
            0xede4f3,
            1)
            .setOrigin(0)
            .setStrokeStyle(8, 0xe4434a, 1);
    }
    #createMainInfoSubPane(){
        const rectWidth = 500;
        const rectHeight = 124;
        this.add.rectangle(
            0, 
            0,
            rectWidth,
            rectHeight,
            0xede4f3,
            1)
            .setOrigin(0)
            .setStrokeStyle(8, 0x905ac2, 1);

    }

}