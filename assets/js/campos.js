function valido(area) {

    area.classList += ' valido';

}

function invalido(area) {

    area.classList += ' invalido';

}

cadastro.addEventListener("click", () => {

    if(nome.value == "") {

        invalido(nome);

    }else {

        valido(nome);

    }

    if(rgm.value == "") {

        invalido(rgm);

    }else {

        valido(rgm);

    }

})