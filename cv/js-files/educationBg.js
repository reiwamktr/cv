import { populateMonth, populateYear } from "./monthAndYearPopulate.js";

document.addEventListener("DOMContentLoaded", () => {
  const addRowBtn = document.getElementById("addRowBtnEducation");
  const tableBody = document.getElementById("dynamicTableBody");
  let rowCount = 0;

  addRowBtn.addEventListener("click", () => {
    if (rowCount < 7) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
              <td>
              <select name="academic_year" class="yearSelect">
                <option value=""></option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
            </td>
            <td>
              <select name="academic_month" class="monthSelect">
                <option value=""></option>
                <option value="january">1</option>
                <option value="february">2</option>
                <option value="march">3</option>
                <option value="april">4</option>
                <option value="may">5</option>
                <option value="june">6</option>
                <option value="july">7</option>
                <option value="august">8</option>
                <option value="september">9</option>
                <option value="october">10</option>
                <option value="november">11</option>
                <option value="december">12</option>
              </select>
            </td>
            <td colspan="2">
              <input type="text" class="dynamicSizeInput" name="academy_name">
            </td>
            <td colspan="2">
              <select name="academic_level" class="educationLevelSelect">
                <option value=""></option>
                <option value="Elementary_school">小学校 (Elementary school)</option>
                <option value="Junior_high_school">中学 (Junior high school)</option>
                <option value="High_school">高等学 (High school)</option>
                <option value="Vocational_school">専門学 (Vocational school)</option>
                <option value="University">大学 (University)</option>
              </select>
            </td>
            <td colspan="2">
              <select name="academic_faculty" class="facultySelect">
                <option value=""></option>
                <option value="management">経営学部 (Management)</option>
                <option value="education">教育学 (Education)</option>
                <option value="art">文学部 (Art)</option>
                <option value="science">理学部 (Science)</option>
                <option value="engineering">工学 (Engineering)</option>
                <option value="agriculture">農学 (Agriculture)</option>
                <option value="law">法学 (Law)</option>
                <option value="nursing">看護学部 (Nursing)</option>
                <option value="anm">看護助手 (ANM)</option>
                <option value="others">その他 (Others)</option>

              </select>
            </td>
            <td>
              <select name="academic_status" class="statusSelect">
                <option value=""></option>
                <option value="enrolled">入学 (Enrolled)</option>
                <option value="graduated">卒業 (Graduated)</option>
                <option value="expected_to_graduate">卒業見込み (Expected to graduate)</option>
                <option value="dropped_out">中途退学 (Dropped out)</option>
              </select>
            </td>
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
        row.classList.add("no-printing");

        
      } else {
        row.classList.remove("no-printing");
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
      "(小学校)Elementary school",
      "(中学)Junior high school",
      "(高等学)High school",
      "(専門学)Vocational school",
      "(大学)University",
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
      "(卒業) Graduated",
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
