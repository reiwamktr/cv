import {
  populateMonth, populateYear
} from "./monthAndYearPopulate.js";

document.addEventListener("DOMContentLoaded", () => {
  const addRowBtn = document.getElementById("addRowBtnEmployer");
  const printBtn = document.getElementById("printBtn");
  const tableBody = document.getElementById("dynamicTableEmployer");
  let rowCount = 0;

  addRowBtn.addEventListener("click", () => {
    if (rowCount < 7) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
                <td><select name="" class="yearSelect"></select></td>
                <td><select name="" class="monthSelect"></select></td>
                <td colspan="4"><input type="text" class="dynamicSizeInput"></td>
                <td colspan="2"><select name="" class="workingSectorSelect"></select></td>
                <td colspan="2"><select name="" class="employerStatusSelect"></select></td>
            `;

      tableBody.appendChild(newRow);

      populateYear(newRow, 2007, 2025);
      populateMonth(newRow);
      populateSelectOptions(newRow);

      rowCount++;

      if (rowCount === 7) {
        addRowBtn.disabled = true;
      }
    }
  });

  const existingRows = tableBody.querySelectorAll("tr");
  existingRows.forEach((row) => {
    populateYear(row, 2007, 2025);
    populateMonth(row);
    populateSelectOptions(row);
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
      const workingSectorSelect = row.querySelector(
        ".workingSectorSelect"
      ).value;
      const employerStatusSelect = row.querySelector(
        ".employerStatusSelect"
      ).value;

      // Add or remove the empty-row class based on input values
      if (
        !yearSelect &&
        !monthSelect &&
        !dynamicInput &&
        !workingSectorSelect &&
        !employerStatusSelect
      ) {
        row.classList.add("empty-row");
      } else {
        row.classList.remove("empty-row");
      }
    });
    window.print();
  });

  /*========================================================================
  Print function close here
  =========================================================================*/

  function populateSelectOptions(row) {
    const workingSectorSelect = row.querySelector(".workingSectorSelect");
    const employerStatusSelect = row.querySelector(".employerStatusSelect");

    // Clearing existing form
    workingSectorSelect.innerHTML = "";
    employerStatusSelect.innerHTML = "";

    // // Adding blank space in the element
    // const blankYearOption = document.createElement("option");
    // blankYearOption.value = "";
    // blankYearOption.textContent = "";
    // yearSelect.appendChild(blankYearOption);

    // //populating selecting option with years
    // const startYear = 2007;
    // const endYear = 2025;
    // for (let year = startYear; year <= endYear; year++) {
    //   const option = document.createElement("option");
    //   option.value = year;
    //   option.textContent = year;
    //   yearSelect.appendChild(option);
    // }

    // // Add blank option to month select
    // const blankMonthOption = document.createElement("option");
    // blankMonthOption.value = "";
    // blankMonthOption.textContent = "";
    // monthSelect.appendChild(blankMonthOption);

    // // Populate month select options
    // const startMonth = 1;
    // const endMonth = 12;
    // for (let month = startMonth; month <= endMonth; month++) {
    //   const option = document.createElement("option");
    //   option.value = month;
    //   option.textContent = month;
    //   monthSelect.appendChild(option);
    // }

    // Populate working sector options
    const workingSectorOptions = [
      "",
      "(農業) Agriculture",
      "(接客) Customer Service",
      "(販売) Sales",
      "(調理) Cooking",
      "(教育) Education",
      "(事務員) Office Worker",
      "(営業) Sales",
      "(運転手) Driver",
      "その他 Other",
    ];

    workingSectorOptions.forEach((optionText) => {
      const option = document.createElement("option");
      option.value = optionText;
      option.textContent = optionText;
      workingSectorSelect.appendChild(option);
    });

    // Populate employer status options
    const employerStatusOptions = [
      "",
      "(入社) Joined the company",
      "(退社) Left the company",
      "(現在に至る) To present",
    ];

    employerStatusOptions.forEach((optionText) => {
      const option = document.createElement("option");
      option.value = optionText;
      option.textContent = optionText;
      employerStatusSelect.appendChild(option);
    });
  }
});
