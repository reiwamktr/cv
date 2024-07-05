document.addEventListener("DOMContentLoaded", () => {
  const addRowBtnCertificate = document.getElementById("addRowBtnCertificate");
  const tableBodyCertificate = document.getElementById("tableBodyCertificate");
  const printBtn = document.getElementById("printBtn");
  let rowCount = 1;

  addRowBtnCertificate.addEventListener("click", () => {
    if (rowCount < 6) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
          <td>
            <select name="qualification_year_${rowCount}" class="yearSelect" id="certificateYear">
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
            <select name="qualification_month_${rowCount}" class="monthSelect" id="certificateMonth"> 
              <option value=""></option>
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
          </td>
          <input type="hidden" name="date" id="certificateDate">
          <td colspan="6">
            <select name="qualification_name_${rowCount}" class="certificateSelect" >
              <option value=""></option>
              <option value="jft_basic">国際交流基金日本語基礎テスト(JFT-Basic) (Japan Foundation Test for Basic Japanese(JFT-Basic))
              </option>
              <option value="jlpt_n5">日本語能力試験N5 (Japanese Language Proficiency Test N5)</option>
              <option value="jlpt_n4">日本語能力試験N4 (Japanese Language Proficiency Test N4)</option>
              <option value="jlpt_n3">日本語能力試験N3 (Japanese Language Proficiency Test N3)</option>
              <option value="jlpt_n2">日本語能力試験N2 (Japanese Language Proficiency Test N2)</option>
              <option value="jlpt_n1">日本語能力試験N1 (Japanese Language Proficiency Test N1)</option>
              <option value="nursing_care_skills">介護技能評価試験 (Nursing care skills evaluation test)</option>
              <option value="nursing_care_japanese">介護日本語評価試験 (Nursing care Japanese language evaluation test)</option>
              <option value="food_service_skills">外食業特定技能測定試験 (The Food Service Industry Skills Proficiency Test)</option>
              <option value="agriculture_general_crop">農業技能測定試験1号 (耕種農業) (Agriculture Skill Assessment Test Level 1
                (general crop farming))</option>
              <option value="agriculture_general_livestock">農業技能測定試験1号 (畜産農業) (Agriculture Skill Assessment Test Level 1
                (general livestock farming))</option>
              <option value="manufacture_food_beverages">飲食料品製造業特定技能測定試験 (Manufacture of Food and Beverages Skills
                Proficiency Test)</option>
              <option value="accommodation_industry">宿泊分野特定技能1号評価試験 (Accommodation Industry Proficiency Test (i))</option>
              <option value="construction_industry">建設分野特定技能評価試験 (Specified skills evaluation exam for Construction
                Industry)</option>
            </select>
          <td colspan="1">
            <select name="qualification_status_${rowCount}" class="certificateStatusSelect">
              <option value=""></option>
              <option value="passed">合格 (Passed)</option>
              <option value="full_marks">満点 (Full marks)</option>
              <option value="obtained">取得 (Obtained)</option>
              <option value="planning">受験予定 (Planned to take exam)</option>
            </select>
          </td>
      `;

      

      rowCount++;
      if (rowCount === 6) {
        addRowBtnCertificate.disabled = true;
      }
      tableBodyCertificate.appendChild(newRow);
    }
  });

  document.getElementById("myForm").addEventListener("submit", (e) => {
    const certificateDate = document.getElementById("certificateDate");
    const certificateYear = document.getElementById("certificateYear");
    const certificateMonth = document.getElementById("certificateMonth");

    const consolidatedDate = `${certificateYear.value} - ${certificateMonth.value}`;

    certificateDate.value = consolidatedDate;
    certificateYear.removeAttribute("name");
    certificateMonth.removeAttribute("name");
  });

  //printing part
  printBtn.addEventListener("click", () => {
    const rows = tableBodyCertificate.querySelectorAll("tr");

    rows.forEach((row) => {
      const yearSelect = row.querySelector(".yearSelect").value;
      const monthSelect = row.querySelector(".monthSelect").value;
      const certificateSelect = row.querySelector(".certificateSelect").value;
      const certificateStatusSelect = row.querySelector(
        ".certificateStatusSelect"
      ).value;

      if (!yearSelect && !monthSelect && !certificateSelect) {
        row.classList.add("empty-row");
      } else {
        row.classList.remove("empty-row");
      }
    });
  });

  //print stop
});
