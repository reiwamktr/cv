import { populateYear, populateMonth } from "./monthAndYearPopulate.js";

document.addEventListener("DOMContentLoaded", () => {
  const addRowBtnCertificate = document.getElementById("addRowBtnCertificate");
  const tableBodyCertificate = document.getElementById("tableBodyCertificate");
  const printBtn = document.getElementById("printBtn");
  let rowCount = 0;

  function populateSelectOptions(row) {
    const certificateSelect = row.querySelector(".certificateSelect");
    const certificateStatusSelect = row.querySelector(
      ".certificateStatusSelect"
    );

    certificateSelect.innerHTML = "";
    certificateStatusSelect.innerHTML = "";

    const certificateOptions = [
      "",
      "国際交流基金日本語基礎テスト(JFT-Basic) (Japan Foundation Test for Basic Japanese(JFT-Basic)",
      "日本語能力試験N5 (Japanese Language Proficiency Test N5)",
      "日本語能力試験N4 (Japanese Language Proficiency Test N4)",
      "日本語能力試験N3 (Japanese Language Proficiency Test N3)",
      "日本語能力試験N2 (Japanese Language Proficiency Test N2)",
      "日本語能力試験N1 (Japanese Language Proficiency Test N1)",
      "介護技能評価試験  (Nursing care skills evaluation test)",
      "介護日本語評価試験 (Nursing care Japanese language evaluation test)",
      "外食業特定技能測定試験 (The Food Service Industry Skills Proficiency Test)",
      "農業技能測定試験1号 (耕種農業) (Agriculture Skill Assessment Test Level 1 (general crop farming)",
      "農業技能測定試験1号 (畜産農業) (Agriculture Skill Assessment Test Level 1 (general livestock farming)",
      "飲食料品製造業特定技能測定試験 (Manufacture of Food and Beverages Skills Proficiency Test)",
      "宿泊分野特定技能1号評価試験 (Accommodation Industry Proficiency Test (i)",
      "建設分野特定技能評価試験 (Specified skills evaluation exam for Construction Industry)",
    ];

    certificateOptions.forEach((optionSelect) => {
      const option = document.createElement("option");
      option.value = optionSelect;
      option.textContent = optionSelect;
      certificateSelect.appendChild(option);
    });

    const certificateStatusOptions = [
      "",
      "合格 (Passed)",
      "満点 (Full marks)",
      "取得 (Obtained)",
      "受験予定 (Planned to take exam)",
    ];

    certificateStatusOptions.forEach((optionText) => {
      const option = document.createElement("option");
      option.value = optionText;
      option.textContent = optionText;
      certificateStatusSelect.appendChild(option);
    });
  }

  const existingRows = tableBodyCertificate.querySelectorAll("tr");
  existingRows.forEach((row) => {
    populateYear(row, 2007, 2025);
    populateMonth(row);
    populateSelectOptions(row);
  });

  addRowBtnCertificate.addEventListener("click", () => {
    if (rowCount < 5) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
          <td><select name="" class="yearSelect"></select></td>
          <td><select name="" class="monthSelect"></select></td>
          <td colspan="6"><select name="" class="certificateSelect">
          <td colspan="1"><select name="" class="certificateStatusSelect">
      `;
      tableBodyCertificate.appendChild(newRow);
      populateYear(newRow, 2007, 2025);
      populateMonth(newRow);
      populateSelectOptions(newRow);
      rowCount++;

      if (rowCount === 5) {
        addRowBtnCertificate.disabled = true;
      }
    }
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
