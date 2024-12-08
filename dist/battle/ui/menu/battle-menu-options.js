/**
 * @typedef {keyof typeof BATTLE_MENU_OPTIONS} BattleMenuOptions
 */

/** @enum {BattleMenuOptions} */
export const BATTLE_MENU_OPTIONS = Object.freeze({
    FIGHT : 'FIGHT',
    SWITCH : 'SWITCH',
    ITEM : 'ITEM',
    FLEE : 'FLEE'
});
/**
 * @typedef {keyof typeof ATTACK_MENU_OPTIONS} AttackMenuOptions
 */

/** @enum {AttackMenuOptions} */
export const ATTACK_MENU_OPTIONS = Object.freeze({
    SKILL_1 : 'SKILL_1',
    SKILL_2 : 'SKILL_2',
    SKILL_3 : 'SKILL_3',
    SKILL_4 : 'SKILL_4'
});
/**
 * @typedef {keyof typeof ACTIVE_BATTLE_MENU} ActiveBattleMenu
 */

/** @enum {ActiveBattleMenu} */
export const ACTIVE_BATTLE_MENU = Object.freeze({
    BATTLE_MAIN : 'BATTLE_MAIN',
    BATTLE_MOVE_SELECT : 'BATTLE_MOVE_SELECT',
    BATTLE_ITEM : 'BATTLE_ITEM',
    BATTLE_SWITCH : 'BATTLE_SWITCH',
    BATTLE_FLEE : 'BATTLE_FLEE'
});