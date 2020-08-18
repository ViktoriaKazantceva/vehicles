/**
 * @param {JSON} data - JSON of vehicles
 * @param {Map} contentMap - Map of vehicles organized by type
 * @function handleData - Fill 'contentMap'
 * @returns {undefined}
 */
export default function handleData(data, contentMap) {
  data.forEach((item) => {
    contentMap.get(item.type).push(item);
  });
}
