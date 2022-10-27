exercicios.value = "";
provas.value = "";

var campoMedia = document.querySelector(".media");

function mediaDasNotas(numero1, numero2) {

    return (numero1 + numero2)  / 2;

}

function camposNotasPreencidos(numero1, numero2) {

    if(!exercicios.value == "" && !provas.value == "") {

        return mediaDasNotas(numero1, numero2);
        
    }else {

        return "";

    }

}

function mostrarMedia(numero1, numero2) {

    let media = camposNotasPreencidos(numero1, numero2);

    campoMedia.innerHTML = "Media: " + media;

}

exercicios.addEventListener("blur", () => {

    numeroExer = parseFloat(exercicios.value);
    numeroProv = parseFloat(provas.value);
    mostrarMedia(parseFloat(exercicios.value), parseFloat(provas.value));

})

provas.addEventListener("blur", () => {

    numeroExer = parseFloat(exercicios.value);
    numeroProv = parseFloat(provas.value);
    mostrarMedia(parseFloat(exercicios.value), parseFloat(provas.value));

})