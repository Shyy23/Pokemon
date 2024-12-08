import { HealthBar } from "../ui/health-bar.js";


export class BattleMonster{
    /**@protected @type {Phaser.Scene} */
    _scene;
    /**@protected @type {import("../../types/typedef.js").Monster} */
    _monsterDetails;
    /**@protected @type {HealthBar} */
    _healthBar;
    /**@protected @type {Phaser.GameObjects.Image} */
    _PhaserGameObject;
    /**@protected @type {number} */
    _currentHealth;
    /**@protected @type {number} */
    _maxHealth;
    /**@protected @type {import("../../types/typedef.js").Attack[]} */
    _monsterAttack;
    /**
     * @param {import("../../types/typedef.js").BattleMonsterConfig} config
     * @param {import("../../types/typedef.js").Coordinate} position
     * 
     */
    constructor(config, position){
        this._scene = config.scene;
        this._monsterDetails = config.monsterDetails;
        this._currentHealth = this._monsterDetails.currentHp;
        this._maxHealth = this._monsterDetails.maxHp;
        this._monsterAttack = [];

        this._healthBar = new HealthBar(this._scene, 34,34);
        this._PhaserGameObject = this._scene.add.image(
            position.x, 
            position.y, 
            this._monsterDetails.assetKey, 
            this._monsterDetails.assetFrame || 0
        );
    }

    /**@type {boolean} */
    get isFainted(){
        return this._currentHealth <= 0;
    }
    /**@type {string} */
    get name(){
        return this._monsterDetails.name;
    }
    /**@type {import("../../types/typedef.js").Attack[]} */
    get attacks(){
        return [...this._monsterAttack];
    }
    /**@type {number} */
    get baseAttack(){
        return this._monsterDetails.baseAttack;
    }

    /**
     * @param {number} damage 
     * @param {()=> void} [callback] 
     */
    takeDamage(damage, callback){
        // Update current number health and animate health bar
        this._currentHealth -= damage;
        if(this._currentHealth < 0){
            this._currentHealth = 0;
        }
        this._healthBar.setMeterPercentageAnimated(this._currentHealth / this._maxHealth, { callback })
    }
}