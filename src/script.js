"use strict";
const $ = window.document.querySelector.bind(document);
let numero01 = $('.numero1');
let numero02 = $('.numero2');
let botao = window.document.querySelector('.calcular');
let resultado = window.document.querySelector('.resultado');
const valores = [];
function calcular(nun1, nun2) {
    return nun1 + nun2;
}
botao.addEventListener('click', () => {
    let h1 = window.document.createElement("h2");
    h1.innerHTML = calcular(+numero01.value, +numero02.value).toString();
    valores.push(h1);
    for (let i = 0; i < valores.length; i++) {
        resultado.appendChild(valores[i]);
    }
    numero01.value = '';
    numero02.value = '';
});
class usuário {
    constructor(nome, idade) {
        this.nome = nome,
            this.idade = idade;
    }
}
