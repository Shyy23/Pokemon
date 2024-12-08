import {BATTLE_ASSET_KEYS, BATTLE_BACKGROUND_ASSET_KEYS, HEALTH_BAR_ASSET_KEYS, MONSTER_ASSET_KEYS} from "../dist/assets/asset-keys.js";
import { Background } from "../dist/battle/background.js";
import { BattleMonster } from "../dist/battle/monster/battle-monster.js";
import { HealthBar } from "../dist/battle/ui/health-bar.js";
import { BattleMenu } from "../dist/battle/ui/menu/battle-menu.js";
import { DIRECTION } from "../dist/common/direction.js";
import Phaser from "../dist/lib/phaser.js";
import { SCENE_KEYS } from "./scenes-keys.js";


export class BattleScene extends Phaser.Scene {
    /** @type {BattleMenu} */
    #battleMenu;
    /** @type {Phaser.Types.Input.Keyboard.CursorKeys} */
    #cursorKeys;

    /** @type {BattleMonster} */
    #activeEnemyMonster;
    constructor(){
        super({
            key: SCENE_KEYS.BATTLE_SCENE,
        });
    }


    create(){
        
        console.log(`[${BattleScene.name}:create] invoked`)

        // Create main background
        const background = new Background(this);
        background.showForest();

        // render monster & player
        this.#activeEnemyMonster = new BattleMonster({
            scene: this,
            monsterDetails: {
                name: MONSTER_ASSET_KEYS.JIVY,
                assetKey: MONSTER_ASSET_KEYS.JIVY,
                assetFrame: 0,
                currentHp: 25,
                maxHp: 25,
                attackIds: [],
                baseAttack: 5
            },
        },{x: 768, y:140}
    );
        // this.add.image(768, 140, MONSTER_ASSET_KEYS.JIVY, 0);
        this.add.image(256, 316, MONSTER_ASSET_KEYS.FROSTSABER, 0).setFlipX(true);

        const playerHealtBar = new HealthBar(this, 34, 34); 
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
        playerHealtBar.container,
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
        // const enemyHealthBar = new HealthBar(this, 34, 34); 
        const enemyHealthBar = this.#activeEnemyMonster._healthBar;
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
            enemyHealthBar.container,
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
                    fontStyle: 'italic',
                    
                       
                }),  
 
            ]);

            // render main info pane
            this.#battleMenu = new BattleMenu(this);
            this.#battleMenu.showMainBattleMenu();

            this.#cursorKeys = this.input.keyboard.createCursorKeys();      
            playerHealtBar.setMeterPercentageAnimated(.5, {
                duration: 3000,
                callback: () => {
                    console.log('Animate Complete');
                }
            });
    }

    update(){
        const wasSpaceKeyPressed = Phaser.Input.Keyboard.JustDown(this.#cursorKeys.space);
        const wasShiftKeyPressed = Phaser.Input.Keyboard.JustDown(this.#cursorKeys.shift);
        if(wasSpaceKeyPressed){
            this.#battleMenu.handlePlayerInput('OK');

            // check if the player selected an attack, and update the display text
            if(this.#battleMenu.selectedAttack === undefined){
                return;
            }
            console.log(`Player Selected the following menu: ${this.#battleMenu.selectedAttack}`);
            this.#battleMenu.hideMonsterAttackSubMenu();
            this.#battleMenu.updateInfoPaneMessagesAndWaitingForInput(['Your Monster Attack An Enemy!'], () => {
                this.#battleMenu.showMainBattleMenu();
            }); 
        }

        if(wasShiftKeyPressed){
            this.#battleMenu.handlePlayerInput('CANCEL');
            return;
        }

        /** @type {import('../dist/common/direction.js').Direction} */
        let selectedDirection = DIRECTION.NONE;
        if(this.#cursorKeys.left.isDown){
            selectedDirection = DIRECTION.LEFT;
        } else if(this.#cursorKeys.right.isDown){
            selectedDirection = DIRECTION.RIGHT;
        } else if(this.#cursorKeys.up.isDown){
            selectedDirection = DIRECTION.UP;
        } else if(this.#cursorKeys.down.isDown){
            selectedDirection = DIRECTION.DOWN;
        }

        if(selectedDirection !== DIRECTION.NONE){
            this.#battleMenu.handlePlayerInput(selectedDirection);
        }
    }


    }