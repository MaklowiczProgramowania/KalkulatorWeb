const wszystkieLiczby = document.querySelectorAll('.liczba');
const wszystkieOperacje = document.querySelectorAll('.operacja');
const rowne = document.querySelector('.rowne');
const del = document.querySelector('.del');
const ac = document.querySelector('.ac');
const pobranePoprzednioTekst = document.querySelector('.pobranePoprzednio');
const pobraneOstatnioTekst = document.querySelector('.pobraneOstatnio');

wszystkieLiczby.forEach(button => {
    button.addEventListener('click', () => {
        if(!(button.innerText === "." && document.getElementById('pobraneOstatnioId').innerText.includes("."))){
            if(pobraneOstatnioTekst.innerText === "") {
                pobraneOstatnioTekst.innerText = button.innerText;
            }
            else pobraneOstatnioTekst.innerText = pobraneOstatnioTekst.innerText + button.innerText;
    }
    })
})

wszystkieOperacje.forEach(button => {
    button.addEventListener('click', () => {
        if(pobraneOstatnioTekst.innerText === "") return;
        else if(pobranePoprzednioTekst.innerText === "") {
            pobranePoprzednioTekst.innerText = pobraneOstatnioTekst.innerText + button.innerText;
            pobraneOstatnioTekst.innerText = "";
        } else {
            pobranePoprzednioTekst.innerText = wykonajOperacje(pobranePoprzednioTekst.innerText.slice(0,-1),pobraneOstatnioTekst.innerText,
                pobranePoprzednioTekst.innerText[document.getElementById('pobranePoprzednioId').innerText.length-1]) + button.innerText;
            pobraneOstatnioTekst.innerText = "";
        }
    })
})

rowne.addEventListener('click', () => {
    if(pobraneOstatnioTekst.innerText !== "" &&  pobranePoprzednioTekst.innerText !== "") {
        pobraneOstatnioTekst.innerText = wykonajOperacje(pobranePoprzednioTekst.innerText.slice(0,-1),pobraneOstatnioTekst.innerText,
            pobranePoprzednioTekst.innerText[document.getElementById('pobranePoprzednioId').innerText.length-1]);
        pobranePoprzednioTekst.innerText = "";
    }

})

ac.addEventListener('click', () => {
    pobraneOstatnioTekst.innerText = "";
    pobranePoprzednioTekst.innerText = "";
})

del.addEventListener('click', () => {
    pobraneOstatnioTekst.innerText = pobraneOstatnioTekst.innerText.slice(0,-1);
})

const wykonajOperacje = (liczba1,liczba2,operacja) => {

    const l1 = parseFloat(liczba1);
    const l2 = parseFloat(liczba2);

    switch(operacja){
        case "+": 
            return l1 + l2;
            break;
        case "-":
            return l1 - l2;
            break;
        case "*":
            return l1 * l2;
            break;
        case "÷":
            return l1 / l2;
            break;
        default:
            return console.log("Nie da się wykonać operacji!")
    }
}