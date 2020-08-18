/* eslint no-console: ["error", { allow: ["log", warn", "error"] }] */
import Table from './classTable';
import { tableTitleNames, contentMap } from './maps';
import handleData from './handleData';
import drawTable from './drawTable';
import urlConst from '../vehicles.json';

export default async function receivingData() {
  try {
    /** The data from the file json  */
    const data = urlConst;
    handleData(data, contentMap);

    contentMap.forEach((value, key) => {
      if (value !== 0) {
        drawTable(new Table(tableTitleNames.get(key), value));
      }
    });
  } catch (e) {
    console.error(e);
  } finally {
    console.log('Finish');
  }
}
