let startButton = document.querySelector("input[type='button']")

startButton.addEventListener("click", startGame)

function startGame() {
    // Ascunde butonul
    startButton.classList.add("hidden")
    createNewLetter()
    // Intervalul este de o secunda(1000 mili secunde)
    let interval = 1000
    //Cream o noua litera dupa fiecare secunda
    setInterval(createNewLetter, interval);
}

// Genereaza un numar intre min si max(inclusiv max)
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// Genereaza o litera aleatorie mare intre A si Z
function randomLetter() {
    // Generam un cod ascii aleatoriu intre 65(codul lui A ascii) si 90(codul zui Z ascii)
    let codeOfA = "A".charCodeAt(0)
    let codeOfZ = "Z".charCodeAt(0)
    let randomCode = randomNumber(codeOfA, codeOfZ)
    // Convertim codul ascii in caracterul asociat lui
    return String.fromCharCode(randomCode)
}
//Genereaza o culoare aleatorie
function randomColor() {
    let red = randomNumber(0, 255)
    let green = randomNumber(0, 255)
    let blue = randomNumber(0, 255)
    return `rgb(${red},${green},${blue})`
}

// Genereaza o pozitie aleatorie intre 0% si 90%
function randomPosition() {
    let position = randomNumber(0, 90)
    return `${position}%`
}
// Creaza un nou element div cu o litera aleatorie si adauga elementul in html
function createNewLetter() {
    let letter = randomLetter()
    let color = randomColor()
    let top = randomPosition()
    let right = randomPosition()
    // cream un nou element div (acest element initial este gol si nu are stil)
    let div = document.createElement("div")
    //adaugam clasa letter elementului nostru
    div.classList.add("letter")
    // Setam textul din interiorul div-ului sa fie litera aleatorie
    div.innerText = letter
    // Setam culoarea css
    div.style.backgroundColor = color
    // setam pozitia top si right in css
    div.style.top = top
    div.style.right = right
    // Setam o clasa cu valoarea literei aleatorii
    div.classList.add(letter)
    // Adaugam elementul div in body
    document.querySelector("body").appendChild(div)
}