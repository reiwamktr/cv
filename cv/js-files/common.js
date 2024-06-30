document.addEventListener("DOMContentLoaded", () => {
    //license part data
    const  otherLicenseContainer = document.querySelector('.otherLicenseContainer');
    othersLicense = document.getElementById('others');
    othersLicense.addEventListener('change', () => {
      console.log(othersLicense.checked)
      if(othersLicense.checked){
        const otherLicenseInput = document.createElement('input');
        otherLicenseInput.type = 'text'
        otherLicenseInput.name = 'others'
        otherLicenseInput.required = true;
        otherLicenseInput.placeholder = 'कुन को license छ लेख्नुहोस् '
        otherLicenseContainer.appendChild(otherLicenseInput);
      }
      else{
        const otherLicenseInput = document.querySelector('input[name="others"]');
        otherLicenseContainer.removeChild(otherLicenseInput);
      }
    });

    document.getElementById('myForm').addEventListener('submit', () => {

    //consolidating date of birth in single column
    const dateOfBirth = document.getElementById('dateOfBirth');
    const dateYear = document.getElementById('year');
    const dateMonth = document.getElementById('month');
    const dateDay = document.getElementById('day');

    const consolidatedDate =  `${dateYear.value} - ${dateMonth.value} - ${dateDay.value}`

    dateOfBirth.value = consolidatedDate;
    dateYear.removeAttribute('name');
    dateMonth.removeAttribute('name');
    dateDay.removeAttribute('name');
    });

    
  

  const checkProficiency = document.getElementById('checkProficiency');
  const checkProficiencyDivs = checkProficiency.querySelectorAll('div');
  const printBtn = document.getElementById('printBtn');

  printBtn.addEventListener('click', () => {
    checkProficiencyDivs.forEach((div) => {
      div.classList.add('no-printing')
    });
  });

});
