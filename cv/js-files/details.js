import { populateYear } from "./monthAndYearPopulate.js";

document.addEventListener("DOMContentLoaded", () => {
  const nameInJapanese = document.getElementById("japaneseName");
  // const nameInEnglish = document.getElementById('englishName');
  const addressInJapanese = document.getElementById("addressJP");
  // const addressInEnglish = document.getElementById('addressEnglish')

  wanakana.bind(nameInJapanese, { IMEMode: "toKatakana" });
  wanakana.bind(addressInJapanese, { IMEMode: "toKatakana" });

  document.addEventListener("input", function (event) {
    if (event.target.classList.contains("dynamicSizeInput")) {
      const inputField = event.target;
      const maxLength = 40;
      const currentLength = inputField.value.length;

      if (currentLength <= maxLength) {
        inputField.setAttribute("size", inputField.value.length + 5);
      }
    }
  });


  populateYear(document, 1980, 2025);
  const daySelect = document.getElementById("day");
  const monthSelect = document.getElementById("month");
  const yearSelect = document.querySelector(".yearSelect")

  // Function to populate days based on selected month and year
  function populateDays() {
    const selectedMonth = parseInt(monthSelect.value);
    const selectedYear = parseInt(yearSelect.value);
    const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();

    // Save the currently selected day before repopulating
    const selectedDay = daySelect.value;

    // Clear current options
    daySelect.innerHTML = '<option value="" disabled selected hidden></option>';

    // Generate options for days
    for (let day = 1; day <= daysInMonth; day++) {
      const option = document.createElement("option");
      option.value = day;
      option.textContent = day;
      daySelect.appendChild(option);
    }

    // Restore the selected day if it was previously selected
    if (selectedDay) {
      daySelect.value = selectedDay;
    }
  }


  // Initial population of days based on current month and year
  populateDays();

  // Event listeners to update days when month or year changes
  monthSelect.addEventListener("change", populateDays);
  yearSelect.addEventListener("change", populateDays);

  const ageDisplay = document.getElementById("ageDisplay");
  const ageInput = document.getElementById("ageInput");
  let currentYear = new Date().getFullYear();

  const calculateAge = (birthYear) => {
    return currentYear - birthYear;
  };

  const updateAge = () => {
    const selectedYear = parseInt(yearSelect.value);
    if (selectedYear) {
      const age = calculateAge(selectedYear);
      ageDisplay.textContent = age; // Update the displayed age
      ageInput.value = age; // Update the value of the hidden input field
    } else {
      ageDisplay.textContent = ""; // Clear age display if no year is selected
      ageInput.value = ""; // Clear hidden input value if no year is selected
    }
  };

  yearSelect.addEventListener("change", updateAge);

  // Initial update on page load
  updateAge();

  //Combined phone no send data

  document.getElementById("myForm").addEventListener('submit', function(){
  const phoneNo = document.getElementById("phone_no");
  const countryCode = document.getElementById("country_code");
  const phoneInput = document.getElementById("phone_input");
  

  const combinedNumber = countryCode.value + phoneInput.value;
  
  phoneNo.value = combinedNumber;

  countryCode.removeAttribute('name');
  phoneInput.removeAttribute('name');
});

});
