var numero01 = window.document.querySelector('.numero1');
var numero02 = window.document.querySelector('.numero2');
var botao = window.document.querySelector('.calcular');
var resultado = window.document.querySelector('.resultado');
var h1 = window.document.createElement("h2");
function calcular(nun1, nun2) {
    return nun1 + nun2;
}
botao.addEventListener('click', function () {
    h1.innerHTML = calcular(+numero01.value, +numero02.value).toString();
    resultado.appendChild(h1);
    numero01.value = null;
    numero02.value = null;
});
var usuário = /** @class */ (function () {
    function usuário(nome, idade) {
        this.nome = nome,
            this.idade = idade;
    }
    return usuário;
}());
