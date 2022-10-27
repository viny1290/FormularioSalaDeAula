function mediaNaNota(elemento) {

    let nome = document.querySelector('[data-aluno="' + elemento.nome + '"');
    console.log(nome)
    
    if(nome.innerHTML >= 8) {

        nome.classList += ' passou'
        console.log(nome)

    }else if(nome.innerHTML >= 0 && nome.innerHTML < 6) {

        nome.classList += ' naoPassou';

    }

}