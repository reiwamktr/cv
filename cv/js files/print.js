// const printBtn = document.getElementById("printBtn");
// const tableBody = document.getElementById("dynamicTableEmployer");
// const row = tableBody.querySelectorAll("tr");
// let yearSelectf = row.querySelector(".yearSelect").value;
// console.log(yearSelectf);

const printBtn = document.getElementById("printBtn");
const tableBody = document.getElementById("dynamicTableEmployer");

printBtn.addEventListener('click', ()=>{
  const rows = tableBody.querySelectorAll("tr");
  rows.forEach((row) => {
    const yearSelect = row.querySelector(".yearSelect");
    console.log(yearSelect.value)
  });
})