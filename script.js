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
    const copyBtn = document.getElementById('copyBtn')
    inputFiled.select()
    inputFiled.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputFiled.value);
    copyBtn.textContent = 'copied !'
    setTimeout(function() {
        copyBtn.innerHTML = '<i class="fa fa-clone"></i>';
    }, 2000);
}