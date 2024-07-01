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
            <select name="employment_year" class="yearSelect" id="employmentYear">
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
            <select name="employment_month" class="monthSelect" id="employmentMonth">
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
          <input type="hidden" name="date" id="employmentDate">
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
        </tr>
      </tbody>
      </tbody>
      <!-- work experience ends here -->

      <!-- personality started -->
      <tbody class="personality">
        <tr>
          <th colspan="5">趣味・性格・長短・得意科目 (Preference・Personality・Favorite subjects)</th>
          <th colspan="4">志望動機 (Purpose)</th>
        </tr>
        <tr>
          <th colspan="2">趣味 (Hobby)</th>
          <td colspan="3">
            <select name="hobby" id="hobbySelect">
              <option value=""></option>
              <option value="reading">読書 (Reading)</option>
              <option value="listening_to_music">音楽を聴くこと (Listening to music)</option>
              <option value="watching_movies">映画を見ること (Watching movies)</option>
              <option value="singing">歌を歌うこと (Singing)</option>
              <option value="cooking">料理を作ること (Cooking)</option>
              <option value="jogging">ジョギング (Jogging)</option>
              <option value="cycling">サイクリング (Cycling)</option>
              <option value="gardening">ガーデニング (Gardening)</option>
              <option value="photography">写真を撮ること (Photography)</option>
              <option value="travelling">旅行 (Travelling)</option>
              <option value="hiking">ハイキング (Hiking)</option>
              <option value="fitness">フィットネス (Fitness)</option>
              <option value="crafts">手芸 (Crafts)</option>
              <option value="fishing">釣り (Fishing)</option>
              <option value="drawing">ドローイング (Drawing)</option>
              <option value="playing_guitar">ギターを弾く (Playing guitar)</option>
              <option value="dancing">ダンス (Dancing)</option>
            </select>
          </td>
          <td style="padding: 10px;" colspan="4" rowspan="3">
            <textarea rows="4" cols="40" class id="purpose" name="purpose"></textarea>
          </td>
        </tr>
        <tr>
          <th colspan="2">性格 (Character)</th>
          <td colspan="3">
            <select name="character" id="characterSelect">
              <option value=""></option>
              <option value="kind">やさしい (Kind)</option>
              <option value="gentle">しんせつ (Gentle)</option>
              <option value="bright">あかるい (Bright)</option>
              <option value="earnest">まじめ (Earnest)</option>
              <option value="energistic">せっきょくてき (Energistic)</option>
              <option value="neat">きちょうめん (Neat)</option>
              <option value="polite">れいぎただしい (Polite)</option>
              <option value="hardworking">がんばりや (Hardworking)</option>
              <option value="cheerful">ほがらか (Cheerful)</option>
              <option value="sociable">しゃこうてき (Sociable)</option>
              <option value="trustworthy">しんらいできる (Trustworthy)</option>
              <option value="curious">こうきしんおうせい (Curious)</option>
              <option value="responsible">せきにんかんがつよい (Responsible)</option>
              <option value="calm">れいせい (Calm)</option>
              <option value="serious">しんけん (Serious)</option>
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

  document.getElementById('myForm').addEventListener('submit', ()=>{

    document.querySelectorAll('.employmentDetails tr').forEach(row=>{
      const employmentDate = row.getElementById('employmentDate');
      const employmentYear = row.getElementById('employmentYear')
      const employmentMonth = row.getElementById('employmentMonth')
      if (employmentDate && employmentYear && employmentMonth){
        const consolidatedDate = `${employmentYear.value} - ${employmentMonth.value}`;
        employmentDate.value = consolidatedDate;
        employmentYear.removeAttribute('name');
        employmentMonth.removeAttribute('name');
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
