document.addEventListener("DOMContentLoaded", () => {
  const addRowBtnFamily = document.getElementById("addRowBtnFamily");
  const dynamicTableFamily = document.getElementById("dynamicTableFamily");
  const printBtn = document.getElementById("printBtn");
  let rowCount = 1;

  addRowBtnFamily.addEventListener("click", () => {
    if (rowCount < 8) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
          <td colspan="5">
              <input type="text" size="40" class="familyName" name="member_name_${rowCount}">
            </td>
            <td colspan="2">
              <select name="relation_${rowCount}" class="relationship">
                <option value=""></option>
                <option value="grandfather">祖父 (Grandfather)</option>
                <option value="grandmother">祖母 (Grandmother)</option>
                <option value="father">父 (Father)</option>
                <option value="mother">母 (Mother)</option>
                <option value="son">息子 (Son)</option>
                <option value="daughter">娘 (Daughter)</option>
                <option value="older_brother">兄 (Older Brother)</option>
                <option value="sister">姉 (Sister)</option>
                <option value="younger_sister">妹 (Younger Sister)</option>
                <option value="younger_brother">弟 (Younger Brother)</option>
                <option value="wife">妻 (Wife)</option>
                <option value="husband">夫 (Husband)</option>
              </select>
            </td>
            <td colspan="2">
              <input type="text" size="40" class="occupation" name="member_occupation_${rowCount}">
            </td>
        `;
      dynamicTableFamily.appendChild(newRow);
      rowCount++;
      if (rowCount === 8) {
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
