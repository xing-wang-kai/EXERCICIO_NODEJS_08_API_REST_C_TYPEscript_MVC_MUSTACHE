const $ = window.document.querySelector.bind(document)

let numero01 = $('.numero1') as HTMLInputElement;
let numero02 = $('.numero2') as HTMLInputElement;
let botao = window.document.querySelector('.calcular') as HTMLButtonElement;
let resultado = window.document.querySelector('.resultado') as HTMLElement;

const valores: any = [];


function calcular (nun1: number, nun2: number ) {
    
    return nun1 + nun2;
}

botao.addEventListener('click', () => {
    let h1 = window.document.createElement("h2");
    h1.innerHTML = calcular(+numero01.value, +numero02.value).toString();
    valores.push(h1)
    
    for(  let i: number = 0; i < valores.length; i ++){
        resultado.appendChild(valores[i]);
    }
    numero01.value = ''; 
    numero02.value = '';
});

class usuário{
    nome: string;
    idade: number
    constructor(nome: string, idade: number){
        this.nome = nome,
        this.idade = idade
    }
}