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
