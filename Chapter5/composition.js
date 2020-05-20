/**
 * Pre- and Postconditions Using Composition
 */
const isString = value => typeof value == 'string';
const isntString = str => !isString(str);
const not = x => !x;

module.export = { not, isString, isntString };
