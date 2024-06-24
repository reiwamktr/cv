import { populateYear, populateMonth } from "./monthAndYearPopulate.js";

document.addEventListener("DOMContentLoaded", () => {
  // const addRowBtnCertificate = document.getElementById("addRowBtnCertificate");
  // const tableBodyCertificate =document.getElementById("tableBodyCertificate");
  // let rowCount = 0;

  const yearSelect = document.querySelector('.yearSelect');
  if (!yearSelect) {
    console.error("Year select element not found in row:", row);
    return;
  }
  yearSelect.innerHTML = "";

  const blankYearOption = document.createElement("option");
  blankYearOption.value = "";
  blankYearOption.textContent = "";
  yearSelect.appendChild(blankYearOption);

  const startYear = 2007;
  const endYear = 2025;
  for (let year = startYear; year <= endYear; year++) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  }


});

// addRowBtnCertificate.addEventListener("click", ()=>{
//   if(rowCount < 5){
//     const newRow = document.createElement("tr");
//     newRow.innerHTML = `
//       <td><select name="" class="yearSelect"></select></td>
//       <td><select name="" class="monthSelect"></select></td>
//       <td colspan="7"><select name="" id=""></select></td>
//     `;
//     tableBodyCertificate.appendChild(newRow);
//     populateYear(newRow, 2007, 2025);
//     populateMonth(newRow);
//     // populateSelectOptions(newRow); 
//     rowCount++;
    
//     if (rowCount === 5){
//       addRowBtnCertificate.disabled = true;
//     }
//   }
// })