// monthAndYearPopulate.js

export function populateYear(row, start, end) {
  const yearSelect = row.querySelector('.yearSelect');
  if (!yearSelect) {
    console.error("Year select element not found in row:", row);
    return;
  }
  yearSelect.innerHTML = "";

  const blankYearOption = document.createElement("option");
  blankYearOption.value = "";
  blankYearOption.textContent = "";
  yearSelect.appendChild(blankYearOption);

  const startYear = start;
  const endYear = end;
  for (let year = startYear; year <= endYear; year++) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  }
}

export function populateMonth(row) {
  const monthSelect = row.querySelector(".monthSelect");
  if (!monthSelect) {
    console.error("Month select element not found in row:", row);
    return;
  }
  monthSelect.innerHTML = "";

  const blankMonthOption = document.createElement("option");
  blankMonthOption.value = "";
  blankMonthOption.textContent = "";
  monthSelect.appendChild(blankMonthOption);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  months.forEach((month, index) => {
    const option = document.createElement("option");
    option.value = index + 1; // Month index starting from 1
    option.textContent = month;
    monthSelect.appendChild(option);
  });
}
