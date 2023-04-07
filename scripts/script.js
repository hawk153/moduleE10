let accordeon = document.querySelectorAll('h3');
let englishBars = document.querySelector('.language-skills.bar').children;
let greekBar = document.querySelector('#Greek')
let englishCounter = 0;
let greekCounter = 0;
let englishSkillLevel = 3;
let greekSkillLevel = 25;
for (i of accordeon) {
    i.onclick = function (e) {
        e.target.classList.toggle("active");
        let content = e.target.nextElementSibling;
        content.classList.toggle("invisible")


    }
}

let skillPainting = function (elem) {
    elem.style = 'background-color:gold';
}


let englishInterval = setInterval((elem = englishBars) => {
    elem[englishCounter].style = 'background-color:gold';
    englishCounter++
    if (englishCounter > englishSkillLevel) {
        clearInterval(englishInterval);
    }
}, 180)

let greekInterval = setInterval((elem = greekBar) => {
    elem.style = `width: ${greekCounter}%`;
    elem.innerHTML = `${greekCounter}%`
    greekCounter++
    if (greekCounter > greekSkillLevel) {
        clearInterval(greekInterval);
    }
}, 40)

