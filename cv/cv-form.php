<?php
$con = mysqli_connect("localhost","root","", "cv_collection");

if(!$con){
  die("Error in mysql". mysqli_connect_error());
}

$full_name_katakana = $_POST["full_name_katakana"] ?? '';
$full_name_english = $_POST["full_name_english"] ?? '';
$date_of_birth = $_POST["date_of_birth"] ?? '';
$address_katakana = $_POST["address_katakana"] ?? '';
$address_english = $_POST["address_english"] ?? '';
$age = $_POST["age"] ?? '';
$gender = $_POST["gender"] ?? '';
$language_proficiency = $_POST["language_proficiency"] ?? '';
$current_residence = $_POST["current_residence"] ?? '';
$email = $_POST["email"] ?? '';
$phone_no = $_POST["phone_no"] ?? '';
$religion = $_POST["religion"] ?? '';
$nationality = $_POST["nationality"] ?? '';
$hobby = $_POST["hobby"] ?? '';
$character = $_POST["character"] ?? '';
$purpose = $_POST["purpose"] ?? '';
$license = $_POST["license"] ?? '';
$marital_status = $_POST["marital_status"] ?? '';
$japan_living_status = $_POST["japan_living_status"] ?? '';
$blood_type = $_POST["blood_type"] ?? '';
$height_cm = $_POST["height_cm"] ?? '';
$weight = $_POST["weight"] ?? '';
$allergy_status = $_POST["allergy_status"] ?? '';
$restrict_eating = $_POST["restrict_eating"] ?? '';


// Prepare SQL statement with placeholders
$sql = "INSERT INTO user_details (
    full_name_katakana, full_name_english, date_of_birth, address_katakana, address_english, age, gender,
    language_proficiency, current_residence, email, phone_no, religion, nationality, hobby, `character`, purpose,
    license, marital_status, japan_living_status, blood_type, height_cm, `weight`, allergy_status, restrict_eating
) VALUES (
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
)";

// Prepare the statement
$stmt = $con->prepare($sql);

if ($stmt) {
    // Bind parameters
    $stmt->bind_param(
        "ssssssssssssssssssssssss",
        $full_name_katakana, $full_name_english, $date_of_birth, $address_katakana, $address_english, $age, $gender,
        $language_proficiency, $current_residence, $email, $phone_no, $religion, $nationality, $hobby, $character, $purpose,
        $license, $marital_status, $japan_living_status, $blood_type, $height_cm, $weight, $allergy_status, $restrict_eating
    );

    // Execute the statement
    if ($stmt->execute()) {
        echo "Record inserted successfully";
    } else {
        echo "Error executing statement: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
} else {
    echo "Error preparing statement: " . $con->error;
}

// Close the connection
$con->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="css-files/style.css">
  <link rel="stylesheet" type="text/css" media="print" href="css-files/print.css" />
</head>

<body>
  <div id="">
  <form action="cv-form.php" id="myForm" method="get">
    <button class="printBtn" id="printBtn">Print this page</button>
    <button type="submit">Submit</button>

    <!-- personal details table started -->
    <table class="detailsTop tableDetails">
      <colgroup>
        <col class="col-1">
        <col class="col-2">
        <col class="col-3">
        <col class="col-4">
        <col class="col-5">
        <col class="col-6">
        <col class="col-7">
        <col class="col-10">
        <col class="col-9">
      </colgroup>
      <tbody class="personalDetails" style="border: 1px solid black">
        <tr>
          <td colspan="6" style="font-size: 40px;" id="formCount">01</td>
          <th colspan="1">履歴書</th>
          <td colspan="2" rowspan="4" class="imageContainer">
            <div class="labelContainer">
              <label for="imageUploadBtn" class="labelForImageUploadBtn"></label>
              <input type="file" id="imageUploadBtn"  accept="image/jpeg, image/png, image/jpg, image/webp">
            </div>

            <img src="assets/images/braver-blank-pfp.jpg" alt="" style="z-index: -1;" id="imageFile">

          </td>
        </tr>
        <tr>
          <th colspan="6">ふりがな</th>
          <td colspan="1">
            <input id="japaneseName" placeholder="katakana मा लेख्नुहोस्" class="dynamicSizeInput"  type="text"
              name="full_name_katakana">
          </td>
        </tr>
        <tr>
          <th colspan="6">氏名 (Full Name)</th>
          <td colspan="1">
            <input id="englishName" placeholder="english मा लेख्नुहोस् " class="dynamicSizeInput"  type="text"
              name="full_name_english">
          </td>
        </tr>
        <tr>
          <th colspan="6">生年月 日 (Date of birth)</th>
          <td colspan="1">
            <select class="yearSelect" name="dob_year"  id="year">
              <option value=""></option>
              <option value="1980">1980</option>
              <option value="1981">1981</option>
              <option value="1982">1982</option>
              <option value="1983">1983</option>
              <option value="1984">1984</option>
              <option value="1985">1985</option>
              <option value="1986">1986</option>
              <option value="1987">1987</option>
              <option value="1988">1988</option>
              <option value="1989">1989</option>
              <option value="1990">1990</option>
              <option value="1991">1991</option>
              <option value="1992">1992</option>
              <option value="1993">1993</option>
              <option value="1994">1994</option>
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
            <label for="year">年</label>
            <select id="month" name="dob_month" >
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">9</option>
              <option value="11">9</option>
              <option value="12">9</option>
            </select>
            <label for="month">月</label>
            <select id="day" name="dob_day" >
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
            <label for="day">日</label>
          </td>
          <input type="hidden" name="date_of_birth" id="dateOfBirth" >
        </tr>
        <tr>
          <th colspan="6">ふりがな</th>
          <td colspan="1">
            <input id="addressJP" placeholder="katakana मा लेख्नुहोस्" class="dynamicSizeInput" type="text"
              name="address_katakana" >
          </td>
          <th colspan="1">年齢 (Age）</th>
          <th colspan="1">性別 (Gender)</th>
        </tr>
        <tr>
          <th colspan="6">出身地 (Birthplace)</th>
          <td colspan="1">
            <input id="addressEnglish" class="" placeholder="english मा लेख्नुहोस् " type="text" name="address_english" >
          </td>
          <td id="age">
            <span id="ageDisplay"></span>
            <input type="hidden" id="ageInput" name="age" >
          </td>
          <td><select id="gender" name="gender" >
              <option name=""></option>
              <option name="male">女</option>
              <option name="female">男</option>
            </select></td>
        </tr>
      </tbody>
    </table>
    <!-- personal details table ended -->

    <!-- japan details table started -->
    <table class="japaneseDetails tableDetails" >
      <colgroup>
        <col>
        <col>
        <col>
        <col>
      </colgroup>
      <tbody>
        <tr>
          <th>可能言語 (Language Proficiency)</th>
          <td>
            <div class="checkboxContainer">
              <div>
                <div>
                  <input style="margin-right: 5px;" type="checkbox" name="language_proficiency" value="japanese"
                    id="langJapanese" >
                  <label for="langJapanese">日本語 (Japanese)</label>
                </div>

                <div>
                  <input style="margin-right: 5px;" type="checkbox" name="language_proficiency" value="english"
                    id="langEnglish" >
                  <label for="langEnglish">英語 (English)</label>
                </div>

                <div>
                  <input style="margin-right: 5px;" type="checkbox" name="language_proficiency" value="hindi"
                    id="langHindi" >
                  <label for="langHindi">ヒンディー語 (Hindi)</label>
                </div>
              </div>

              <div>
                <div>
                  <input style="margin-right: 5px;" type="checkbox" name="language_proficiency" value="korean"
                    id="langKorean" >
                  <label for="langKorean">韓国語 (Korean)</label>
                </div>
                <div>
                  <input style="margin-right: 5px;" type="checkbox" name="language_proficiency" value="others"
                    id="langOthers" >
                  <label for="langOthers">その他 (Others)</label>
                </div>
              </div>
            </div>
          </td>
          <th>現居住地 (Current residence)</th>
          <td>
            <select name="current_residence" >
              <option value=""></option>
              <option value="nepal">ネパール (Nepal)</option>
              <option value="japan">日本(Japan)</option>
              <option value="overseas">海外(Overseas)</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- japan details table ended -->

    <!-- digital details table started -->
    <table class="tableDetails">
      <colgroup>
        <col>
        <col>
        <col>
        <col>
        <col>
        <col>
        <col>
        <col>
        <col>
        <col>
      </colgroup>
      <tbody class="Details">
        <tr>
          <th colspan="2">メール (E-mail)</th>
          <td colspan="3">
            <input type="email" style="width: 90%" placeholder="तपाईंको E-mail लेख्नुहोस्" name="email" >
          </td>
          <th colspan="2">電話番号 (Phone)</th>
          <td colspan="3" id="phoneNoBox">
            <select name="country_code" id="country_code">
              <option value="+977">+977</option>
              <option value="+91">+91</option>
              <option value="+87">+87</option>
            </select>
            <input style="padding:0" type="number" name="phone_input" id="phone_input" >
            <input type="hidden" name="phone_no" id="phone_no" >
          </td>
        </tr>
        <tr>
          <th colspan="2">宗教 (Religion)</th>
          <td colspan="3"><select name="religion" id="religion">
              <option value=""></option>
              <option value="">ヒンズー教 (Hindu)
              </option>
              <option value="Buddhist">仏教 (Buddhist )
              </option>
              <option value="Islam">イスラム教 (Islam)
              </option>
              <option value="Christian">キリスト教 (Christian)
              </option>
              <option value="Others">その他 (Others)
              </option>
            </select></td>
          <th colspan="2">国籍 (nationality)</th>
          <td colspan="3">
            <input type="radio" name="nationality" value="nepalese" id="nepalese" >
            <label for="nepalese" style="margin-right: 10px">Nepalese</label>
            <input type="radio" name="nationality" value="indian" id="indian" >
            <label for="indian">Indian</label>
        </tr>
      </tbody>
    </table>
    <!-- digital details table ended -->

    <!-- other details table started -->
    <table class="tableDetails">
      <colgroup>
        <col>
        <col>
        <col>
        <col>
        <col>
        <col>
        <col>
        <col>
        <col>
      </colgroup>

      <!-- education started -->
      <tbody>
      <tbody>
        <tr>
          <th colspan="9">(学歴) Education background (Qualification) <button id="addRowBtnEducation" class="addRowBtn no"> Add
              Row</button>
          </th>
        </tr>
        <tr>
          <th>年 (Year)</th>
          <th>月 (Month)</th>
          <option value=""></option>
          <th colspan="4">学校名 (Institution Name)</th>
          <th colspan="1">教育レベル) (Education level)</th>
          <th colspan="1">学部 (Faculty)</th>
          <th colspan="1">ステータス (Status)</th>
        </tr>
      </tbody>

      <tbody id="dynamicTableBody" class="educationDetails">
        <tr>
          <td>
            <select name="academic_year" class="yearSelect" id="educationYear">
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
            <select name="academic_month" class="monthSelect" id="educationMonth">
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
          <input type="hidden" name="date" class="educationDate" >
          <td colspan="4">
            <input type="text"  class="dynamicSizeInput" name="academy_name" >
          </td>
          <td colspan="1">
            <select name="academic_level" class="educationLevelSelect">
              <option value=""></option>
              <option value="Elementary_school">小学校 (Elementary school)</option>
              <option value="Junior_high_school">中学 (Junior high school)</option>
              <option value="High_school">高等学 (High school)</option>
              <option value="Vocational_school">専門学 (Vocational school)</option>
              <option value="University">大学 (University)</option>
            </select>
          </td>
          <td colspan="1">
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
          <td colspan="1">
            <select name="academic_status" class="statusSelect">
              <option value=""></option>
              <option value="enrolled">入学 (Enrolled)</option>
              <option value="graduated">卒業 (Graduated)</option>
              <option value="expected_to_graduate">卒業見込み (Expected to graduate)</option>
              <option value="dropped_out">中途退学 (Dropped out)</option>
            </select>
          </td>
        </tr>
      </tbody>
      </tbody>
      <!-- Education ends here -->

      <!-- work experience started -->
      <tbody class="employmentDetails">
      <tbody>
        <tr>
          <th colspan="9">職歴 (Work experience) <button submit="none" id="addRowBtnEmployer" class="addRowBtn"> Add Row</button></th>
        </tr>

      <tbody>
        <tr>
          <th>年 (Year)</th>
          <th>月 (Month)</th>
          <th colspan="4">会社名 (Company Name)</th>
          <th colspan="2">職業 (Working Sector)</th>
          <th colspan="1">ステータス (Status)</th>
        </tr>
      </tbody>
      <tbody id="dynamicTableEmployer" class="employmentDetails">
        <tr>
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
          <input type="hidden" name="date" class="employmentDate" >
          <td colspan="4">
            <input type="text" name="employment_company" class="dynamicSizeInput" >
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
        </tr>
      </tbody>
      <!-- personality ended -->

      <!-- Family part started -->
      <tbody class="familyHistory">
        <tr>
          <th colspan="9">Family <button id="addRowBtnFamily" class="addRowBtn">Add row</button></th>
        </tr>
        <tr>
          <th colspan="5">家族氏名 (Family composition)</th>
          <th colspan="2">続柄 (Relationship)</th>
          <!-- <th>年生 (Year of birth)</th> -->
          <th colspan="2">職業 (Occupation)</th>
        </tr>
      <tbody id="dynamicTableFamily">
        <tr>
          <td colspan="5">
            <input type="text" size="40" class="familyName" name="member_name" >
          </td>
          <td colspan="2">
            <select name="relation" class="relationship">
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
            <input type="text" size="40" class="occupation" name="member_occupation" >
          </td>
        </tr>
      </tbody>
      </tbody>
      <!-- Family part ended -->

      <!-- Qualification part started -->
      <tbody class="qualifications">
        <tr>
          <th colspan="9">免許・資格 (Diplomas and certificates) <button id="addRowBtnCertificate" class="addRowBtn">Add row</button></th>
        </tr>
        <tr>
          <th>年 (Year)</th>
          <th>月 (Month)</th>
          <th colspan="6">certificate Name</th>
          <th>ステータ (Status)</th>
        </tr>
      <tbody id="tableBodyCertificate">
        <tr>
          <td>
            <select name="qualification_year" class="yearSelect" id="certificateYear">
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
            <select name="qualification_month" class="monthSelect" id="certificateMonth"> 
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
            <select name="qualification_name" class="certificateSelect" >
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
            <select name="qualification_status" class="certificateStatusSelect">
              <option value=""></option>
              <option value="passed">合格 (Passed)</option>
              <option value="full_marks">満点 (Full marks)</option>
              <option value="obtained">取得 (Obtained)</option>
              <option value="planning">受験予定 (Planned to take exam)</option>
            </select>
          </td>
        </tr>
      </tbody>
      </tbody>
      <!-- Qualification part ended -->

      <!-- Other details part started -->
      <tbody class="otherDetails">
        <tr>
          <th colspan="4">運転免許 (Driver’s License)</th>
          <td colspan="6" class="drivingLicense">
            <div>
              <input style="margin-right: 7px; margin-top: 5px;" type="checkbox" id="bike" name="bike_license" value="yes" >
              <label for="bike">バイク</label>
            </div>
            <div>
              <input style="margin-right: 7px; margin-top: 5px;" type="checkbox" name="car_license" value="yes" id="car" >
              <label for="car" >車</label>
            </div>
            <div class="otherLicenseContainer">
              <input style="margin-right: 7px; margin-top: 5px;" type="checkbox"
                id="others">
              <label for="others">その他</label>
            </div>
            <input type="hidden" id="license">
          </td>
        </tr>
        <tr>
          <th colspan="4">配偶者 (Married Status):</th>
          <td colspan="5" class="marriedStatus">
            <div>
              <div style="display: inline-block; margin-right: 20px;">
                <input style="margin-right: 7px; margin-top: 5px;" value="single" id="single" type="radio" name="marital_status">
                <label for="single">未婚 (Single)</label>
              </div>
  
              <div class="married" style="display: inline-block; margin-right: 20px;">
                <input style="margin-right: 7px; margin-top: 5px;" value="married" type="radio" name="marital_status" id="married">
                <label for="married">既婚 (Married)</label>
                <div class="childrenStatus" style="margin-top: 5px; display: none;">
                  <input type="radio" value="have_child" id="children">
                  <label for="children">子供がいる</label>
                  <input type="radio" value="no_child" id="noChildren">
                  <label for="noChildren">子供がいない</label>
                </div>
              </div>
              <div style="display: inline-block;">
                <input style="margin-right: 7px; margin-top: 5px;" value="divorced" type="radio" name="marital_status" id="divorced">
                <label for="divorced">離婚 (Divorced)</label>
              </div>
            </div>
          </td>
        </tr>
      <tbody class="relativesInformation">
        <tr>
          <th colspan="4">在日親戚 (Relatives in Japan):</th>
          <td colspan="5" class="japanRelatives">
            <div>
              <input style="margin-right: 7px; margin-top: 5px;" value="yes" type="radio" name="relatives_status_japan"
                id="checkRelatives">
              <label for="checkRelatives">有</label>
            </div>
            <div>
              <input style="margin-right: 7px; margin-top: 5px;" value="no" type="radio" name="relatives_status_japan"
                id="realtivesNo">
              <label for="realtivesNo">無</label>
            </div>
          </td>
        </tr>
        <tr class="relativesInJapanInformation">
          <th colspan="2">氏名 (Full Name)</th>
          <td colspan="4">
            <input type="text" name="relative_name" size="35">
          </td>
          <th colspan="1">住所 (Address):</th>
          <td colspan="2">
            <input type="text" name="relative_address" size="40">
          </td>
        </tr>
      </tbody>
      </tbody>
      <!-- Other details part ended -->

      <!-- Physiology part started -->
      <tbody class="physiology">
        <tr>
          <th colspan="2">日本滞在歴 <br>(Visited Japan)</th>
          <th colspan="1">血液型<br>(Blood type)</th>
          <th colspan="2">身長<br>(Height)</th>
          <th>体重<br>(Weight)</th>
          <th colspan="2">アレルギー <br>(Allergy)</th>
          <th colspan="2">食べられないもの <br> (What you can't eat)</th>
        </tr>
        <tr>
          <td colspan="2">
            <input style="margin-top: 10px;" type="radio" name="japan_living_status" id="japanLivingStatusYes">
            <label for="japanLivingStatusYes">有 (Yes)</label>
            <input style="margin-top: 10px;" type="radio" name="japan_living_status" id="japanLivingStatusNo">
            <label for="japanLivingStatusNo">無 (No)</label>
          </td>
          <td colspan="1">
            <select name="blood_type" id="">
              <option value=""></option>
              <option value="A">A型</option>
              <option value="B">B型</option>
              <option value="O">O型</option>
              <option value="AB">AB型</option>
            </select>
          </td>
          <td colspan="2" id="heightTd">
            <div class="height no-printing">
              <select name="height_ft" id="heightFt">
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              
              <span style="margin-left: 5px">ft</span>
              <select name="height_in" id="heightIn">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
              </select>
              <span style="margin-left: 5px">in</span>
              <input type="hidden" name="height" id="totalHeightInCm">
            </div>
          </td>
          <td>
            <input type="number" name="weight" id="weight" style="width: 30px;" min="40" max="100" maxlength="3"
              oninput="this.value = this.value.replace(/[^0-9]/g).slice(0, 3);">
            <label for="weight">キロ</label>
          </td>
          <td>
            <input type="radio" id="allergyYes" name="allergy_status" value="yes">
            <label for="allergyYes">有 (Yes)</label>
          </td>
          <td>
            <input type="radio" id="allergyNo" name="allergy_status" value="no">
            <label for="allergyNo">無 (No)</label>
          </td>
          <td><textarea style="padding: 7px;" name="restrict_eating"></textarea></td>
        </tr>
      </tbody>
      <!-- Physiology part ended -->

    </table>
    <!-- other details table ended -->
  </form>
  </div>
</body>
<script>

  document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && (event.key === 'p' || event.key === 'P')) {
      event.preventDefault();
      alert('Please use the button to print');
    }
  });

  document.getElementById('addRowBtnEducation').addEventListener('click', function(e){
    e.preventDefault();
  });
  document.getElementById('addRowBtnEmployer').addEventListener('click', function(e){
    e.preventDefault();
  });
  document.getElementById('addRowBtnCertificate').addEventListener('click', function(e){
    e.preventDefault();
  });
  document.getElementById('addRowBtnFamily').addEventListener('click', function(e){
    e.preventDefault();
  });

</script>
<script src="https://unpkg.com/wanakana"></script>
<script type="module" src="js-files/monthAndYearPopulate.js"></script>
<script type="module" src="js-files/educationBg.js"></script>
<script type="module" src="js-files/diplomaAndCertificates.js"></script>
<script type="module" src="js-files/familyHistory.js"></script>
<script type="module" src="js-files/details.js"></script>
<script type="module" src="js-files/personality.js"></script>
<script type="module" src="js-files/company.js"></script>
<script src="js-files/common.js"></script>
<script src="js-files/relativesStatus.js"></script>
<script src="js-files/marriedStatus.js"></script>
<script src="js-files/height.js"></script>
<script type="module" src="js-files/uploadPFP.js"></script>
</html>