/**
 * @param {Object} tableData - Object of class Table
 * @function drawTable - Creates the html table layout and fills the table cells
 * @returns {undefined}
 */
export default function drawTable(tableData) {
  const tableTemplate = document.querySelector('#template');
  const tableElement = tableTemplate.content.cloneNode(true);
  const tableTitle = tableElement.querySelector('.table-title');
  const table = tableElement.querySelector('table');
  const tableTR = tableElement.querySelector('tr');

  document.body.append(tableElement);
  tableTitle.textContent = tableData.title;

  /** create table headers (cells headers) */
  tableData.headers.forEach((name) => {
    if (name !== 'type') {
      const newTH = document.createElement('th');
      newTH.textContent = name;
      tableTR.appendChild(newTH);
    }
  });
  table.appendChild(tableTR);

  /** create table rows */
  tableData.rows.forEach((item) => {
    const newTR = document.createElement('tr');
    Object.keys(item).forEach((key) => {
      if (key !== 'type') {
        const newTD = document.createElement('td');
        newTD.textContent = item[key];
        newTR.appendChild(newTD);
      }
    });
    table.appendChild(newTR);
  });
}
