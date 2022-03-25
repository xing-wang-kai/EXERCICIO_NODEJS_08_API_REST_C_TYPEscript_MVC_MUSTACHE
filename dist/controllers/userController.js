"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idadePost = exports.idadeGet = exports.nome = void 0;
const nome = (req, res) => {
    const nome = req.query.nome;
    res.render('pages/nome', {
        nome: nome,
    });
};
exports.nome = nome;
const idadeGet = (req, res) => {
    res.render('pages/idade');
};
exports.idadeGet = idadeGet;
const idadePost = (req, res) => {
    let idade = 0;
    let existIdade = false;
    if (req.body.ano) {
        let ano = Number.parseInt(req.body.ano);
        let anoAt = new Date().getFullYear();
        idade = anoAt - ano;
        existIdade = true;
    }
    res.render('pages/idade', {
        idade,
        existIdade
    });
};
exports.idadePost = idadePost;
