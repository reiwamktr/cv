document.addEventListener("DOMContentLoaded", () => {
  printBtn = document.getElementById("printBtn");
  printBtn.addEventListener("click", () => {
    const heightFt = document.getElementById("heightFt");

    const heightIn = document.getElementById("heightIn");

    const heightTd = document.getElementById("heightTd");
    const totalHeight = Math.round(
      parseInt(heightFt.value) * 30.48 + parseInt(heightIn.value) * 2.54
    );

    const height_cm = document.createElement("div");
    height_cm.classList.add("heightInCm");
    height_cm.innerHTML = `${totalHeight} センチ`;
    heightTd.appendChild(height_cm);

    document.getElementById("totalHeightInCm").value = totalHeight;
    heightFt.value = "";
    heightIn.value = "";
  });
});
