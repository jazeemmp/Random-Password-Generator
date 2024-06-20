const inputFiled = document.getElementById('inputFiled')

function generatePassword(){
    const passCharcters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+"
    const passLenght = 12
    let password = ""
    for(let i=0;i<passLenght;i++){
        randomIndex = Math.floor(Math.random()*passCharcters.length)
        password += passCharcters[randomIndex]
    }
   inputFiled.value = password;
}
function copyText(){
    const copyBtn = document.getElementById("copyBtn")
    copyBtn.classList.add("active")
    inputFiled.select()
    inputFiled.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputFiled.value);
    copyBtn.innerHTML = '<i class="fa-solid fa-clone"></i>'
    setTimeout(function() {
        copyBtn.innerHTML = '<i class="fa-regular fa-clone"></i>';
        copyBtn.classList.remove("active");
    }, 2000);
}