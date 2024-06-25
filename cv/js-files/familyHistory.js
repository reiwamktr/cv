import { populateYear } from "./monthAndYearPopulate.js";

document.addEventListener("DOMContentLoaded", () => {
  const addRowBtnFamily = document.getElementById("addRowBtnFamily");
  const dynamicTableFamily = document.getElementById("dynamicTableFamily");
  const printBtn = document.getElementById("printBtn");
  let rowCount = 0;

  function populateSelectOptions(row) {
    const relationshipSelect = row.querySelector(".relationship");
    const occupationSelect = row.querySelector(".occupation");

    relationshipSelect.innerHTML = "";
    occupationSelect.innerHTML = "";

    const relationshipOptions = [
      "",
      "祖父 (Grandfather)",
      "祖母 (Grandmother)",
      "父 (Father)",
      "母 (Mother)",
      "息子 (Son)",
      "娘 (Daughter)",
      "兄 (Older Brother)",
      "姉( Sister)",
      "妹 (Younger Sister)",
      "弟 (Younger Brother)",
      "妻 (Wife)",
      "夫 (Husband)",
    ];

    relationshipOptions.forEach((optionText) => {
      const option = document.createElement("option");
      option.value = optionText;
      option.textContent = optionText;
      relationshipSelect.appendChild(option);
    });
  }

  const existingRows = dynamicTableFamily.querySelectorAll("tr");
  existingRows.forEach((row) => {
    populateSelectOptions(row);
    populateYear(row, 1985, 2007);
  });

  addRowBtnFamily.addEventListener("click", () => {
    if (rowCount < 7) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
          <td colspan="5"><input type="text" size="40" class="familyName"></td>
          <td><select class="relationship"></select></td>
          <td><select class="yearSelect"></select></td>
          <td colspan="2"><input type="text" size="40" class="occupation"></td>
        `;
      dynamicTableFamily.appendChild(newRow);
      populateYear(newRow, 1985, 2007);
      populateSelectOptions(newRow);
      rowCount++;
      if (rowCount === 5) {
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
      const birthYear = row.querySelector(".yearSelect").value;
      const occupation = row.querySelector(".occupation").value;

      // Add or remove the empty-row class based on input values
      if (!familyName && !relationship && !birthYear && !occupation) {
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
