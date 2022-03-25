"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const data = [
    { title: 'camisolas', price: 38.50 },
    { title: 'Vestidos', price: 95.80 },
    { title: 'Calças', price: 42.30 },
    { title: 'Bermudas', price: 15.90 },
    { title: 'Saias', price: 18.20 },
];
exports.Products = {
    getAll: () => {
        return data;
    },
    getPriceAfter: (price) => {
        return data.filter(item => item.price >= price);
    }
};
