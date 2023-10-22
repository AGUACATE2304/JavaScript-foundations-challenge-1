/* 
    1. Define function 'getTypeOf', which receives a value as paramenter and returns the type of this value
        Use typeof to ckech the types for each of the main 5 primitive types (string, number, boolean, null, undefined)
    2. Log the result of any function call.
*/

function getTypeOf(value) {
    const typeMapping = {
        'string': 'string',
        'number': 'number',
        'boolean': 'boolean',
        'null': 'null',
        'undefined': 'undefined'
    };
    const type = typeof value;
    return typeMapping[type] || (value === null ? 'null' : 'other');
}