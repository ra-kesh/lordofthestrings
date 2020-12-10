var btnSindarin = document.querySelector('.sindarin');
var btnQuenya = document.querySelector(".quenya");
var btnOrchish = document.querySelector(".orchish");
var btnTranslate = document.querySelector(".translate");
var txtInput = document.querySelector(".input-text");
var txtOutput = document.querySelector(".output-text");



function getQuenya(){
     serverURL = "https://api.funtranslations.com/translate/quenya.json?text=";

}

function getSindarin(){
     serverURL = "https://api.funtranslations.com/translate/sindarin.json?text=";

}

function getOrchish(){
     serverURL = "https://api.funtranslations.com/translate/orchish.json?text=";

}

getSindarin();

btnSindarin.addEventListener("click",getSindarin);
btnQuenya.addEventListener("click",getQuenya);
btnOrchish.addEventListener("click",getOrchish);


function transHandler(){

    var textInput = txtInput.value;
    fetchURL = serverURL+textInput;
    fetch(fetchURL)
    .then(response => response.json())
    .then(json=>{
        var textOutput = json.contents.translated;
       txtOutput.innerText= textOutput;
    })
}

btnTranslate.addEventListener("click",transHandler);
