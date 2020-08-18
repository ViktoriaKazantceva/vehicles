/* eslint max-len: ["error", { "comments": 200 }] */
/**
 * @constant tableHeaderNames - Table headers (cells headers)
 * @type {Map}
*/
const tableHeaderNames = new Map([
  ['name', 'Name'],
  ['speed', 'Speed'],
  ['capacity', 'Capacity'],
  ['body', 'Body'],
  ['wingspan', 'Wingspan'],
  ['maxpower', 'Max power'],
]);
/**
 * @constant tableTitleNames - Titles for tables
 * @type {Map}
*/
const tableTitleNames = new Map([
  ['airplane', 'Airplaines'],
  ['auto', 'Automobiles'],
  ['boat', 'Boats'],
]);
/**
 * @constant contentMap - Map for arrays of vehicle JSONs of a definite type
 * @type {Map}
*/
const contentMap = new Map([
  ['auto', []],
  ['airplane', []],
  ['boat', []],
]);

export { tableHeaderNames, tableTitleNames, contentMap };
