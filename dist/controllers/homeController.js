"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.home = void 0;
const Product_1 = require("../models/Product");
const home = (req, res) => {
    let user = {
        nome: "kai Wang",
        idade: 83
    };
    let showOld = false;
    if (user.idade > 50) {
        showOld = true;
    }
    let list = Product_1.Products.getAll();
    res.render('pages/home', {
        user,
        showOld,
        products: list,
        frazesdoDIa: ['bom dia', 'boa tarde', 'boa noite']
    });
};
exports.home = home;
