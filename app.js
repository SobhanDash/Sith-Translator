var btnTranslator = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("output")


serverUrl= "https://api.funtranslations.com/translate/sith.json"

function getTranslatedUrl(input){
    return serverUrl + "?" + "text=" + input 
}

function errorHandler(error){
    console.log("Error Occured!", error);
    alert("The server is down. Please try again!")
}

function clickHandler(){
    var inputText = txtInput.value

    fetch(getTranslatedUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
}

btnTranslator.addEventListener("click", clickHandler);