// 3 - Digitar alguna de estas palabras(casa, mesa, perro, gato) luego mostrar la palabra traducida en inglés.Es decir, si se ingresa 'casa' debemos mostrar el texto 'house' en la página.(Con Switch)

const btnTraduct = document.getElementById('btnTraduct');
const traduct = document.getElementById('traduction');
const wordTraduct = document.getElementById('word');

const traductor = () => {
    let traduction = "";
    let traductWord = prompt('Escriba una palabra');
    if (traductWord == "" || traductWord == null) {
        alert("No se ingreso ninguna palabra");
        return;
    } else {
        wordTraduct.innerHTML = "palabra que quiere traducir: " + traductWord;
    }

    traductWord = traductWord.toLowerCase();

    switch (traductWord) {
        case "casa":
            traduction = "home";
            traduct.innerHTML = "traduccion:" + traduction;
            break;
        case "mesa":
            traduction = "table";
            traduct.innerHTML = "traduccion:" + traduction;
            break;
        case "perro":
            traduction = "dog";
            traduct.innerHTML = "traduccion:" + traduction;
            break;
        case "gato":
            traduction = "cat";
            traduct.innerHTML = "traduccion:" + traduction;
            break;
        default:
            alert("La palabra no se pede traducir");

    }
};

btnTraduct.onclick = () => {
    traductor();
};