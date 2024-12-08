/**
 * 
 * @param {never} _value 
 */
export function exhaustiveGuard(_value){
    throw new Error(`Error! reached forbidden guard function with unexpected value: ${JSON.stringify(_value)}`);
}