let wordsList = []
let api = "https://random-word-api.herokuapp.com/word?number=10"


function random(){
    let number = Math.floor(Math.random() * wordsList.length)
    document.getElementById("random-word").textContent = wordsList[number].charAt(0).toUpperCase() + wordsList[number].slice(1);
}

function getWords(){
fetch(api)
.then(words => words.json())
.then(word => {
    wordsList = word
    random()
});
}

document.getElementById("button").addEventListener("click", getWords)






