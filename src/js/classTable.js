/* eslint max-len: ["error", { "comments": 200 }] */
import { tableHeaderNames } from './maps';
/**
 * Creates a new Table
 */
export default class Table {
  /**
   * @param {String} title - Table title
   * @param {Array} content - Array of vehicle JSONs of a definite type
   */
  constructor(title, content) {
    /** table title */
    this.title = title;
    /** vehicle array */
    this.rows = content;
    /** array for table headers (cells headers) */
    this.headers = [];
    this.prepareHeaders(content);
  }

  // eslint-disable-next-line class-methods-use-this
  getKeysFromContent(content) {
    return Object.keys(content[0]); // get "first" json's keys
  }

  /**
   * @param {Array} content -  Array of vehicle JSONs of a definite type
   * @function prepareHeaders - The function get headers from content array by
   * matching keys with the names of the table headers (cells headers)
   * and adds these headers to 'headers' array
   * tableHeaderNames - user defined Map
   */
  prepareHeaders(content) {
    this.getKeysFromContent(content).forEach((item) => {
      if (item !== 'type') {
        this.headers.push(tableHeaderNames.get(item));
      }
    });
  }
}
