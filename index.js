const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passEl1 = document.getElementById("pass1")
let passEl2 = document.getElementById("pass2")
let passLen = 15

function generatePass() {
    passEl1.textContent = getPass()
    passEl2.textContent = getPass()
}

function getPass() {
    let pass = ""
    for(let i = 0; i < passLen; i++) {
        let randIdx = Math.floor(Math.random() * characters.length)
        pass += characters[randIdx]
    }
    
    return pass;
}

function copyToClipboard(passNum) {
    let text = ""
    if(passNum === 1) {
        text = passEl1.textContent
    } else {
        text = passEl2.textContent
    }
    
    navigator.clipboard.writeText(text) // only work with https otherwise throws error
}
