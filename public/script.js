var $ = window.document.querySelector.bind(document);
var numero01 = $('.numero1');
var numero02 = $('.numero2');
var botao = $('.calcular');
var resultado = $('.resultado');
var valores = [];
function calcular(nun1, nun2) {
    return nun1 + nun2;
}
botao.addEventListener('click', function () {
    var h1 = window.document.createElement("h2");
    h1.innerHTML = `A soma de ${+numero01.value} com ${+numero02.value} é igual a: ${calcular(+numero01.value, +numero02.value).toString()}`;
    valores.push(h1);
    for (var i = 0; i < valores.length; i++) {
        resultado.appendChild(valores[i]);
    }
    numero01.value = '';
    numero02.value = '';
});
var usuário = /** @class */ (function () {
    function usuário(nome, idade) {
        this.nome = nome,
            this.idade = idade;
    }
    return usuário;
}());
