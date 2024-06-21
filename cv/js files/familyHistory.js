document.addEventListener("DOMContentLoaded", () => {


const addRowBtnFamily = document.getElementById('addRowBtnFamily');
const dynamicTableFamily = document.getElementById('dynamicTableFamily');
const printBtn = document.getElementById("printBtn");

let rowCount = 0;

addRowBtnFamily.addEventListener('click', ()=>{
  if (rowCount < 7){
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td colspan="5"><input type="text" size="40" class="familyName"></td>
      <td><select class="relationship"></select></td>
      <td><select class="birthYear"></select></td>
      <td colspan="2"><input type="text" size="40"></td>
    `;
    dynamicTableFamily.appendChild(newRow)
    rowCount++;
    if (rowCount === 5){
      addRowBtnFamily.disabled = true;
    }
  }
});


/*========================================================================
  Print function starts here
  =========================================================================*/

  printBtn.addEventListener("click", () => {
    const rows = dynamicTableFamily.querySelectorAll("tr");

    rows.forEach((row) => {
      const familyName = row.querySelector(".familyName").value;
      const relationship = row.querySelector(".relationship").value;
      const birthYear = row.querySelector(".birthYear").value;
      const occupation = row.querySelector(".occupation").value;


      // Add or remove the empty-row class based on input values
      if (
        !familyName &&
        !relationship &&
        !birthYear &&
        !occupation
      ) {
        row.classList.add("empty-row");
      } else {
        row.classList.remove("empty-row");
      }
    });
  });

     /*========================================================================
  Print function close here
  =========================================================================*/


});