document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById("myForm").addEventListener("submit", function() {
    const maritalRadios = document.querySelectorAll('input[name="marital_status"]');
    let maritalStatus = '';

    maritalRadios.forEach(radio => {
      if (radio.checked) {
        maritalStatus = radio.value;
        if (maritalStatus === 'married') {
          const childStatus = document.querySelector('.childrenStatus input[type="radio"]:checked');
          if (childStatus) {
            maritalStatus += ' ' + childStatus.value;
          }
        }
      }
    });

    // Set the value directly to the radio button
    maritalRadios.forEach(radio => {
      if (radio.checked) {
        radio.value = maritalStatus;
      }
    });

    // Remove child_status radios from the form data if not married
    if (maritalStatus !== 'married') {
      document.querySelectorAll('.childrenStatus input[type="radio"]').forEach(childRadio => {
        childRadio.removeAttribute('name');
      });
    }
  });

  document.querySelectorAll('input[name="marital_status"]').forEach(radio => {
    radio.addEventListener('change', function() {
      const childStatusSection = document.querySelector('.childrenStatus');
      if (this.value === 'married') {
        childStatusSection.style.display = 'block';
        document.querySelectorAll('.childrenStatus input[type="radio"]').forEach(childRadio => {
          childRadio.setAttribute('name', 'child_status');
        });
      } else {
        childStatusSection.style.display = 'none';
        document.querySelectorAll('.childrenStatus input[type="radio"]').forEach(childRadio => {
          childRadio.removeAttribute('name');
        });
      }
    });
  });
});
