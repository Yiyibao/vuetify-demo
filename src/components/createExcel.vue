<script setup >
import { saveAs } from "file-saver";
import Excel from "exceljs";

const workbook = new Excel.Workbook();
const worksheet = workbook.addWorksheet('Sheet1');
const worksheet2 = workbook.addWorksheet('Sheet2');

worksheet.columns = [
  { header: '', key: 'id', width: 26 },
  { header: '1月', key: 'name0', width: 15 },
  { header: '2月', key: 'name1', width: 15, outlineLevel: 1 },
  { header: '2月.', key: 'name2', width: 15, outlineLevel: 1 },
  { header: '3月', key: 'name3', width: 15, outlineLevel: 1 },
  { header: '3月.', key: 'name4', width: 15, outlineLevel: 1 },
  { header: '4月', key: 'name5', width: 15, outlineLevel: 1 },
  { header: '4月.', key: 'name6', width: 15, outlineLevel: 1 },
  { header: '5月', key: 'name7', width: 15, outlineLevel: 1 },
  { header: '5月.', key: 'name8', width: 15, outlineLevel: 1 },
  { header: '6月', key: 'name9', width: 15, outlineLevel: 1 },
  { header: '6月.', key: 'name10', width: 15, outlineLevel: 1 },
  { header: '7月', key: 'name11', width: 15, outlineLevel: 1 },
  { header: '7月.', key: 'name12', width: 15, outlineLevel: 1 },
  { header: '8月', key: 'name13', width: 15, outlineLevel: 1 },
  { header: '8月.', key: 'name14', width: 15, outlineLevel: 1 },
  { header: '9月', key: 'name15', width: 15, outlineLevel: 1 },
  { header: '9月.', key: 'name16', width: 15, outlineLevel: 1 },
  { header: '10月', key: 'name17', width: 15, outlineLevel: 1 },
  { header: '10月.', key: 'name18', width: 15, outlineLevel: 1 },
  { header: '11月', key: 'name19', width: 15, outlineLevel: 1 },
  { header: '11月.', key: 'name20', width: 15, outlineLevel: 1 },
  { header: '12月', key: 'name21', width: 15, outlineLevel: 1 },
  { header: '12月.', key: 'name22', width: 15, outlineLevel: 1 },
];

worksheet.getRow(1).eachCell((cell, colNumber) => {
  cell.alignment = { horizontal: 'center', vertical: 'middle' };
});
worksheet.addRow({id: '', name0: 'Actual',
  name1: 'Target',
  name2: 'Actual',
  name3: 'Target',
  name4: 'Actual',
  name5: 'Target',
  name6: 'Actual',
  name7: 'Target',
  name8: 'Actual',
  name9: 'Target',
  name10: 'Actual',
  name11: 'Target',
  name12: 'Actual',
  name13: 'Target',
  name14: 'Actual',
  name15: 'Target',
  name16: 'Actual',
  name17: 'Target',
  name18: 'Actual',
  name19: 'Target',
  name20: 'Actual',
  name21: 'Target',
  name22: 'Actual',});

worksheet.mergeCells('C1:D1');
worksheet.mergeCells('E1:F1');
worksheet.mergeCells('G1:H1');
worksheet.mergeCells('I1:J1');
worksheet.mergeCells('K1:L1');
worksheet.mergeCells('M1:N1');
worksheet.mergeCells('O1:P1');
worksheet.mergeCells('Q1:R1');
worksheet.mergeCells('S1:T1');
worksheet.mergeCells('U1:V1');
worksheet.mergeCells('W1:X1');

const data = ['', '', 'incident','SOT','Hazard','Hazard resolved','QOT','BOOST','TC Demand &output','TC OTD','PEP OTD','OEE'];

for(let i = 1; i <= data.length; i++) {
  worksheet.getCell(i,1).value = data[i-1];
}

const data2 = ['WK14','WK14','WK15','WK15','WK16','WK16','WK17','WK17']
const data3 = ['Target','Actual','Target','Actual','Target','Actual','Target','Actual',]

for(let i = 1; i <= data2.length; i++) {
  worksheet2.getCell(1,i).value = data2[i-1];
}
for(let i = 1; i <= data3.length; i++) {
  worksheet2.getCell(2,i).value = data3[i-1];
}
function download2() {
  workbook.xlsx.writeBuffer().then(buffer => {
    // done
    saveAs(new Blob([buffer]), `${Date.now()}_feedback.xlsx`);
  });
}
</script>
<template>
  <button style="width: 200px;height: 200px;" @click="download2"></button>
</template>







