document.addEventListener("DOMContentLoaded", () => {
  printBtn = document.getElementById('printBtn');
  printBtn.addEventListener('click', ()=>{
    const heightFt = parseInt(document.getElementById('heightFt').value);
    const heightIn = parseInt(document.getElementById('heightIn').value);

    const heightTd = document.getElementById('heightTd')
    const totalHeight = Math.round(((heightFt * 12)  + heightIn)*2.54);

    let height_cm = document.querySelector('.heightInCm');

    if (height_cm) {
      heightInCm.innerHTML = `${totalHeight} センチ`; // Update existing element
    } else {
      const height_cm = document.createElement('div');
      height_cm.classList.add('heightInCm');
      height_cm.innerHTML = `${totalHeight} センチ`;
      heightTd.appendChild(height_cm)
    }

    const formData = {
      height_cm: totalHeight
    };

  });

});