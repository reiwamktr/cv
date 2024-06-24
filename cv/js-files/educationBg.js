import { populateMonth, populateYear } from "./monthAndYearPopulate.js";

document.addEventListener("DOMContentLoaded", () => {
  const addRowBtn = document.getElementById("addRowBtnEducation");
  const tableBody = document.getElementById("dynamicTableBody");
  let rowCount = 0;

  addRowBtn.addEventListener("click", () => {
    if (rowCount < 7) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
              <td><select name="" class="yearSelect"></select></td>
              <td><select name="" class="monthSelect"></select></td>
              <td colspan="2"><input type="text" class="dynamicSizeInput"></td>
              <td colspan="2"><select name="" class="educationLevelSelect"></select></td>
              <td colspan="2"><select name="" class="facultySelect"></select></td>
              <td><select name="" class="statusSelect"></select></td>
          `;
      tableBody.appendChild(newRow);

      // Populate newly added row with select options

      populateMonth(newRow);
        populateYear(newRow, 2007, 2025);
      populateSelectOptions(newRow);
      rowCount++;

      // Disable button after 7 rows
      if (rowCount === 7) {
        addRowBtn.disabled = true;
      }
    }
  });

  /*========================================================================
  Print function starts here
  =========================================================================*/

  printBtn.addEventListener("click", () => {
    const rows = tableBody.querySelectorAll("tr");

    rows.forEach((row) => {
      const yearSelect = row.querySelector(".yearSelect").value;
      const monthSelect = row.querySelector(".monthSelect").value;
      const dynamicInput = row.querySelector(".dynamicSizeInput").value.trim();
      const educationLevelSelect = row.querySelector(
        ".educationLevelSelect"
      ).value;
      const facultySelect = row.querySelector(".facultySelect").value;
      const statusSelect = row.querySelector(".statusSelect").value;

      // Add or remove the empty-row class based on input values
      if (
        !yearSelect &&
        !monthSelect &&
        !dynamicInput &&
        !educationLevelSelect &&
        !facultySelect &&
        !statusSelect
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

  // Initial population of existing rows (if any)
  const existingRows = tableBody.querySelectorAll("tr");
  existingRows.forEach((row) => {
    populateYear(row, 2007, 2025);
        populateMonth(row);
        populateSelectOptions(row)
  });

  // Function to populate select options for a specific row
  function populateSelectOptions(row) {
    const educationLevelSelect = row.querySelector(".educationLevelSelect");
    const facultySelect = row.querySelector(".facultySelect");
    const statusSelect = row.querySelector(".statusSelect");

    // Clear existing options
    educationLevelSelect.innerHTML = "";
    facultySelect.innerHTML = "";
    statusSelect.innerHTML = "";

    // Populate education level select options
    const educationOptions = [
      "",
      "（小学校）Elementary school",
      "（中学）Junior high school",
      "（高等学）High school",
      "（専門学）Vocational school",
      "（大学）University",
    ];
    educationOptions.forEach((optionText) => {
      const option = document.createElement("option");
      option.value = optionText;
      option.textContent = optionText;
      educationLevelSelect.appendChild(option);
    });

    // Populate faculty select options
    const facultyOptions = [
      "",
      "(経営学部) Management",
      "(教育学) Education",
      "(文学部) Art",
      "(理学部) Science",
      "(工学) Engineering",
      "(農学) Agriculture",
      "(法学) Law",
      "(看護学部) Nursing",
      "(看護助手) ANM",
      "(その他) Others",
    ];
    facultyOptions.forEach((optionText) => {
      const option = document.createElement("option");
      option.value = optionText;
      option.textContent = optionText;
      facultySelect.appendChild(option);
    });

    // Populate status select options
    const statusOptions = [
      "",
      "(入学) Enrolled",
      "(卒業) Graduation",
      "(卒業見込み) Expected to graduate",
      "(中途退学) Dropped out",
    ];
    statusOptions.forEach((optionText) => {
      const option = document.createElement("option");
      option.value = optionText;
      option.textContent = optionText;
      statusSelect.appendChild(option);
    });
  }

});
