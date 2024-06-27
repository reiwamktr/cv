document.addEventListener('DOMContentLoaded',()=>{
  const relativesInJapan = document.querySelectorAll('input[name="relativeInfoJapan"]');
const relativesInJapanInformation = document.getElementsByClassName('relativesInJapanInformation')[0]
relativesInJapanInformation.classList.add('statusHide')

relativesInJapan.forEach((radio)=>{
  radio.addEventListener('change', ()=>{  
    if(radio.checked && radio.value === 'yes'){
      relativesInJapanInformation.classList.remove('statusHide')
    }
    else{
      relativesInJapanInformation.classList.add('statusHide')
    }
    
  });
});
});