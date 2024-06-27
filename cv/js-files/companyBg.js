document.addEventListener("DOMContentLoaded", () => {
  const addRowBtn = document.getElementById("addRowBtnEmployer");
  const printBtn = document.getElementById("printBtn");
  const tableBody = document.getElementById("dynamicTableEmployer");
  let rowCount = 0;

  addRowBtn.addEventListener("click", () => {
    if (rowCount < 7) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
                <td>
              <select name="employment_year" class="yearSelect">
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
              <select name="employment_month" class="monthSelect">
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
            <td colspan="4">
              <input type="text" name="employment_company" class="dynamicSizeInput">
            </td>
            <td colspan="2">
              <select name="employment_sector" class="workingSectorSelect">
                <option value=""></option>
                <option value="agriculture">農業 (Agriculture)</option>
                <option value="customer_service">接客 (Customer Service)</option>
                <option value="cooking">調理 (Cooking)</option>
                <option value="education">教育 (Education)</option>
                <option value="office_worker">事務員 (Office Worker)</option>
                <option value="sales">営業 (Sales)</option>
                <option value="driver">運転手 (Driver)</option>
                <option value="other">その (Other)</option>
              </select>
            </td>
            <td colspan="2">
              <select name="employment_status" class="employerStatusSelect">
                <option value=""></option>
                <option value="joined">入社 (Joined the company)</option>
                <option value="left">退社 (Left the company)</option>
                <option value="to_present">現在に至る (To present)</option>
              </select>
            </td>
            `;

      tableBody.appendChild(newRow);
      rowCount++;

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
});
