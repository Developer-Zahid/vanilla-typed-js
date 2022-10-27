let getBox = document.querySelector(".get-box");
let getInput = document.querySelector(".get-input");
let getBtn = document.querySelector(".get-btn");
let typed = document.querySelector(".typed");
let animationDuration = typed.dataset.duration;
let typedText = typed.innerHTML;
let characterIndex = 0;
var isIncrease = true;
let typedArr = [];

function typeJs(){
    if(isIncrease == true){
        if(characterIndex == typedArr.length) {
            isIncrease = false;
        }
        else{
            typed.innerHTML += typedArr[characterIndex];
            document.querySelectorAll(".eachCharacter:not(.eachCharacter--empty)").forEach((item)=>{
                item.classList.add("slideIn");
            });
            characterIndex++;
        }
    }
    else{
        if(characterIndex == 0) {
            isIncrease = true;
        }
        else{
            document.querySelectorAll(".eachCharacter:not(.eachCharacter--empty)").forEach((item)=>{
                item.classList.remove("slideIn");
                item.classList.add("slideOut");
            });
            typed.removeChild(typed.lastChild);
            characterIndex--;
        }
    }
}

window.addEventListener("DOMContentLoaded", function(){
    document.documentElement.style.setProperty('--animation-duration', animationDuration);
    getInput.value = "";
})

getBtn.addEventListener("click", function(){
    getBox.style.display = 'none';
    typed.innerHTML = "";
    typedArr = getInput.value.split("").map((item)=>{
        if(item == ' '){
            return `<span class='eachCharacter eachCharacter--empty'>${item}</span>`
        }else{
            return `<span class='eachCharacter'>${item}</span>`
        }
    });
    typeJs();

    setInterval(function(){
        typeJs();
    }, animationDuration * 1000)
})


//=========Hide the Inspect tool js=========//
document.onkeydown = (e)=>{
    const inspectTool = e.charCode || e.keyCode;
    if(inspectTool == 123 || inspectTool == 85 || inspectTool == 83 || inspectTool == 73 || (e.ctrlKey && e.shiftKey && e.keyCode == 73) || (e.ctrlKey && e.shiftKey && e.keyCode == 74)){
        e.preventDefault();
    }
}
//==================//