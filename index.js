const passwordCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",0,1,2,3,4,5,6,7,8,9,"<",">","#","_"]
const toggleBtn = document.querySelector("#light-icon")
const popUp = document.querySelector(".copy-notification")
const toggleContainer = document.querySelector(".container2")
const passwordLengthEl = document.querySelector(".passwordLength")
const passwordGeneratorBtn = document.querySelector(".btn")
let option1 = document.querySelector("#passwordDisplay1")
let option2 = document.querySelector("#passwordDisplay2")
let option3 = document.querySelector("#passwordDisplay3")
let option4 = document.querySelector("#passwordDisplay4")



/************************
 * EVENT LISTENERS
 ************************/
toggleBtn.addEventListener("click", toDarkMode)
toggleBtn.addEventListener("mouseover", screenHintFeature)
passwordGeneratorBtn.addEventListener("click", renderPassword)
option1.addEventListener("click", copyPasswordOnClick1 )
option2.addEventListener("click", copyPasswordOnClick2)
option3.addEventListener("click", copyPasswordOnClick3 )
option4.addEventListener("click", copyPasswordOnClick4 )



/************************
 * FUNCTION DECLARATIONS
 ************************/
function toDarkMode(){
    document.body.classList.add("darkMode")
    toggleContainer.innerHTML = `<img src="./images/dark_mode.png" id="dark-icon" class="change-mode-icon" alt="dark-mode">`
    toggleContainer.innerHTML +=`<span id="screen-tip">switch to light mode</span>`
    document.querySelector("#dark-icon").addEventListener("click", toLightMode)
    document.querySelector("#dark-icon").addEventListener("mouseover", screenHintFeature)
}

function toLightMode(){
    document.body.classList.remove("darkMode")
    toggleContainer.innerHTML = `<img src="./images/light_mode.png" id="light-icon" class="change-mode-icon" alt="light-mode">`
    toggleContainer.innerHTML +=`<span id="screen-tip">switch to dark mode</span>`
    document.querySelector("#light-icon").addEventListener("click", toDarkMode)
    document.querySelector("#light-icon").addEventListener("mouseover", screenHintFeature)
}

function screenHintFeature(){
    setTimeout(function(){document.getElementById("screen-tip").style.display = "inline"}, 0);
    setTimeout(function(){document.getElementById("screen-tip").style.display = "none"}, 1500)
}

function copyPasswordOnClick1(){
    if(option1.textContent !== ""){
        navigator.clipboard.writeText(option1.textContent)
        setTimeout(function(){popUp.style.visibility = "visible"}, 0);
        setTimeout(function(){popUp.style.visibility = "hidden"}, 600)
    }
}

function copyPasswordOnClick2(){
    if(option2.textContent !== ""){
        navigator.clipboard.writeText(option2.textContent)
        setTimeout(function(){popUp.style.visibility = "visible"}, 0);
        setTimeout(function(){popUp.style.visibility = "hidden"}, 600)
    }
}

function copyPasswordOnClick3(){
    if(option3.textContent !== ""){
        navigator.clipboard.writeText(option3.textContent)
        setTimeout(function(){popUp.style.visibility = "visible"}, 0);
        setTimeout(function(){popUp.style.visibility = "hidden"}, 600)
    }
}

function copyPasswordOnClick4(){
    if(option4.textContent !== ""){
        navigator.clipboard.writeText(option4.textContent)
        setTimeout(function(){popUp.style.visibility = "visible"}, 0);
        setTimeout(function(){popUp.style.visibility = "hidden"}, 600)
    }
}

function renderPassword(){
    let Optionholder1 = ""
    let Optionholder2 = ""
    let Optionholder3 = ""
    let Optionholder4 = ""
    if(passwordLengthEl.value === ""){
        return alert("Kindly Set a Password Length!")
    }
    else if(passwordLengthEl.value < 7){
        return alert("Insecure! Password length is too short, kindly input a higher number")
    }
    else{
        for(let i = 0; i<passwordLengthEl.value; i++){
            let randomness1 = Math.floor(Math.random()*passwordCharacters.length)
            let randomness2 = Math.floor(Math.random()*passwordCharacters.length)
            let randomness3 = Math.floor(Math.random()*passwordCharacters.length)
            let randomness4 = Math.floor(Math.random()*passwordCharacters.length)
            Optionholder1 += passwordCharacters[randomness1]
            Optionholder2 += passwordCharacters[randomness2]
            Optionholder3 += passwordCharacters[randomness3]
            Optionholder4 += passwordCharacters[randomness4]
        }
    }
    option1.textContent = Optionholder1
    option2.textContent = Optionholder2
    option3.textContent = Optionholder3
    option4.textContent = Optionholder4
}