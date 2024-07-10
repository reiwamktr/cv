const imageFile = document.getElementById('imageFile');

const imageUploadBtn = document.getElementById('imageUploadBtn');


imageUploadBtn.onchange = ()=>{
  imageFile.src = URL.createObjectURL(imageUploadBtn.files[0])
} 