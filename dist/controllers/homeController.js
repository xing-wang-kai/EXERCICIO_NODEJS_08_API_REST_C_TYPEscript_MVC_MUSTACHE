"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.home = void 0;
const home = (req, res) => {
    let user = {
        nome: "kai Wang",
        idade: 83
    };
    let showOld = false;
    if (user.idade > 50) {
        showOld = true;
    }
    res.render('pages/home', {
        user,
        showOld,
        products: [
            { title: 'camisolas', price: 38.50 },
            { title: 'Vestidos', price: 95.80 },
            { title: 'Calças', price: 42.30 },
            { title: 'Bermudas', price: 15.90 },
            { title: 'Saias', price: 18.20 },
        ],
        frazesdoDIa: ['bom dia', 'boa tarde', 'boa noite']
    });
};
exports.home = home;
