document.addEventListener("DOMContentLoaded", () => {
  const addRowBtn = document.getElementById("addRowBtnEducation");
  const tableBody = document.getElementById("dynamicTableBody");
  let rowCount = 1;
  
  addRowBtn.addEventListener("click", () => {
    if (rowCount < 8) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
                        <td>
            <select name="academic_year_${rowCount}" class="yearSelect" id="educationYear">
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
            <select name="academic_month_${rowCount}" class="monthSelect" id="educationMonth">
              <option value=""></option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </td>
          <input type="hidden" name="date" class="educationDate">
          <td colspan="4">
            <input type="text"  class="dynamicSizeInput" name="academy_name_${rowCount}">
          </td>
          <td colspan="1">
            <select name="academic_level_${rowCount}" class="educationLevelSelect">
              <option value=""></option>
              <option value="Elementary_school">小学校 (Elementary school)</option>
              <option value="Junior_high_school">中学 (Junior high school)</option>
              <option value="High_school">高等学 (High school)</option>
              <option value="Vocational_school">専門学 (Vocational school)</option>
              <option value="University">大学 (University)</option>
            </select>
          </td>
          <td colspan="1">
            <select name="academic_faculty_${rowCount}" class="facultySelect">
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
          <td colspan="1">
            <select name="academic_status_${rowCount}" class="statusSelect">
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

      rowCount++;

      // Disable button after 7 rows
      if (rowCount === 8) {
        addRowBtn.disabled = true;
      }
    }
  });

  //combining name results 

document.getElementById('myForm').addEventListener('submit', (event) => {
  console.log("row");
    // Process education details
    document.querySelectorAll('.educationDetails tr').forEach(row => {
      const educationYear = row.querySelector('.yearSelect');
      const educationMonth = row.querySelector('.monthSelect');
      const educationDate = row.querySelector('.educationDate');

      if (educationYear && educationMonth && educationDate) {
          const consolidatedDate = `${educationYear.value} - ${educationMonth.value}`;
          educationDate.value = consolidatedDate;
          educationYear.removeAttribute('name');
          educationMonth.removeAttribute('name');
      }
    });
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
});
  /*========================================================================
  Print function close here
  =========================================================================*/
