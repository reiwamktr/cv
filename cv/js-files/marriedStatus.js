document.addEventListener("DOMContentLoaded", () =>{
  const maritalRadios = document.querySelectorAll('input[name="marital_status"]');
  let maritalStatus = '';
  let childStatus = '';
  let isMarried = false;

  maritalRadios.forEach(radio => {
    if (radio.checked) {
      maritalStatus = radio.value;
      if (maritalStatus === 'married') {
        isMarried = true;
        const childRadios = document.querySelectorAll('.childrenStatus input[type="radio"]');
        childRadios.forEach(childRadio => {
          if (childRadio.checked) {
            childStatus = childRadio.value;
          }
        });
        maritalStatus += ' ' + childStatus;
        radio.value = maritalStatus; // Update the radio button's value
      }
    }
  });

  if (isMarried) {
    document.querySelectorAll('.childrenStatus input[type="radio"]').forEach(childRadio => {
      childRadio.removeAttribute('name');
    });
  }
  // Select the radio buttons for marital status
  const radioButtons = document.querySelectorAll('input[name="marital_status"]');
  // Select the div containing child options
  const childrenStatusDiv = document.querySelector('.childrenStatus');

  // Add event listeners to each radio button
  radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
      // Check if the married radio button is selected
      if (radio.value === 'married' && radio.checked) {
        childrenStatusDiv.style.display = 'block'; // Show child options inline
      } else {
        childrenStatusDiv.style.display = 'none'; // Hide child options
      }
    });
  });
});
