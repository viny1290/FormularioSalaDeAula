var nome = document.querySelector('[data-campo="nome"]');
var rgm = document.querySelector('[data-campo="rgm"]');
const exercicios = document.querySelector('[data-nota="primeira"]');
const provas = document.querySelector('[data-nota="segunda"]');

var numeroExer = 0;
var numeroProv = 0;


const cadastro = document.querySelector('[data-botao="cadastro"]');
const exibir = document.querySelector('[data-botao="exibir"]');
const apagar = document.querySelector('[data-botao="apagar"]');
const sair = document.querySelector('[data-botao="sair"]');

const campoExibir = document.querySelector('[data-informacoes="itens"]');
const areaSecundaria = document.querySelector(".campoExibir");

exibir.addEventListener("click", () => {

    areaSecundaria.classList = "campoExibir";

})

sair.addEventListener("click", () => {

    areaSecundaria.classList += " esconder";

})


apagar.addEventListener("click", () => {

    localStorage.clear();
    window.location.reload();

})