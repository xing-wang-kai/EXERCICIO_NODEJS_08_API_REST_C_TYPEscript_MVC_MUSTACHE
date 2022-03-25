"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const routes_1 = __importDefault(require("./routes"));
const painel_1 = __importDefault(require("./routes/painel"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//comandos para permitir o acesso as rotas em todas urls com CRUD e headers
app.use((req, res, next) => {
    res.header('Acess-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Acess-Control-ALlow-Headers', 'X-PINGOTHER, Content-Type, Authorization');
    app.use((0, cors_1.default)());
    next();
});
//Executando comandos para direcionar o mustache para pasta views ---
app.set('view engine', 'mustache');
app.set('views', path_1.default.join(__dirname, 'views'));
app.engine('mustache', (0, mustache_express_1.default)());
//Comandos para informar quais rotas terá o site, sendo elas Mustache / painel e static da página static
app.use("/mustache", routes_1.default); // rotas para contatos e informações de forms
app.use('/painel', painel_1.default); //rotas para painel renderizar paineis e informações
app.use('/static', express_1.default.static(path_1.default.join(__dirname, '../public'))); //rotas para modo static usando a pasta public
app.use((req, res) => { res.status(404).send('Página não encontrada!!'); }); //caso a página não seja localizada
const port = process.env.PORT || 3000; //usando o modo dotenv para buscar o valor da porta e executar
app.listen(port, () => {
    console.log(`Servidor logado com sucesso na porta ${port}`);
});
