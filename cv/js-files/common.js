document.addEventListener("DOMContentLoaded", () => {
  const checkProficiency = document.getElementById('checkProficiency');
  const checkProficiencyDivs = checkProficiency.querySelectorAll('div');
  const printBtn = document.getElementById('printBtn');

  printBtn.addEventListener('click', () => {
    checkProficiencyDivs.forEach((div) => {
      div.classList.add('no-printing')
    });
  });
});
