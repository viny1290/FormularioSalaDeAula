const itens = JSON.parse( localStorage.getItem("itens")) || [];

itens.forEach(element => {
    criarElemento(element);
});

function CriaItem(nome, rgm, exer, prova) {

    return itemAtual = {
        "nome": nome,
        "rgm": rgm,
        "exercicios": exer,
        "provas": prova
    }

}


function criarElemento(elemento) {
    
    let media = mediaDasNotas(elemento.exercicios, elemento.provas);
    let novoCampo = '<div class="item"><h2 class="campoExibir__titulo">' + elemento.nome + '</h2><p class="item__informacao">RGM: ' + elemento.rgm + '</p><p>Media:</p><p class="item__informacao"' + 'data-aluno="'+ elemento.nome +'">' + media + '</p></div>';
    
    campoExibir.innerHTML += novoCampo;

    mediaNaNota(elemento);
    
}

cadastro.addEventListener("click", () => {

    //Manda para o LocalStorage

    criarElemento(CriaItem(nome.value, rgm.value, numeroExer, numeroProv))
        
    
    itens.push(CriaItem(nome.value, rgm.value, numeroExer, numeroProv))

    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = "";
    rgm.value = "";
    nota1.value = "";
    nota2.value = "";

})