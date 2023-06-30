let copieBtn = document.querySelector('#copie')
let input = document.querySelector('input');

function getPassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let passwordLength = 16;
    let password = "";

    for(let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length)

        password += chars.substring(randomNumber , randomNumber + 1)

        input.value = password;

        console.log(input.value);
    }
}

function copyPassword() {
    if(input.value.length == 16) {
        input.select();
        document.execCommand("copy");

        alert('Mots de passe copié !')
    } else {
        alert('Veuillez générer un mots de passe avant de copier.')
    }
}
