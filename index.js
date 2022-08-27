const textarea = document.querySelector('textarea'),
fileNameInput = document.querySelector('.file-name input'),
selectMenu = document.querySelector('.save-as select'),
saveBtn = document.querySelector('.save-btn');

selectMenu.addEventListener('change',()=>{
    //getting selected option text
    let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText = `Save As ${selectedOption.split(" ")[0]} File`;
})

saveBtn.addEventListener("click",()=>{
 const blob = new Blob([textarea.value],{type:selectMenu.value});
 console.log(blob);
 const fileUrl = URL.createObjectURL(blob);
//  console.log(fileUrl);
const link = document.createElement('a');
link.download = fileNameInput.value;
link.href=fileUrl;
link.click();
})
