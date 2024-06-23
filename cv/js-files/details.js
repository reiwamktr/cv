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
});

populateYear(document, 1985, 2007);
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
  daySelect.innerHTML = '<option value="" disabled selected hidden>1</option>';

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

// // Populate years options (adjust range as needed)
// const currentYear = new Date().getFullYear();
// for (let year = currentYear - 17; year >= currentYear - 40; year--) {
//   const option = document.createElement("option");
//   option.value = year;
//   option.textContent = year;
//   yearSelect.appendChild(option);
// }

// Initial population of days based on current month and year
populateDays();

// Event listeners to update days when month or year changes
monthSelect.addEventListener("change", populateDays);
yearSelect.addEventListener("change", populateDays);

const personAge = document.getElementById("age");
let currentYear = new Date().getFullYear();

const findAge = () => {
  const selectedYear = parseInt(yearSelect.value);
  if (selectedYear) {
    const age = currentYear - selectedYear;
    personAge.innerHTML = age;
  }
};
yearSelect.addEventListener("change", findAge);
