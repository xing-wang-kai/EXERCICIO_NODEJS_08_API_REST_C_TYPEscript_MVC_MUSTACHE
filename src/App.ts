
import express, {Request, Response} from 'express';
import path from 'path';
import mustache from 'mustache-express';
import cors from 'cors';
import 'dotenv/config';
import mainRouter from './routes';
import painelRouter from './routes/painel';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//comandos para permitir o acesso as rotas em todas urls com CRUD e headers
app.use((req: Request, res: Response, next) =>{
    res.header('Acess-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Acess-Control-ALlow-Headers', 'X-PINGOTHER, Content-Type, Authorization');
    app.use(cors());
    next()
})

//Executando comandos para direcionar o mustache para pasta views ---
app.set('view engine', 'mustache');
app.set('views', path.join( __dirname, 'views'));
app.engine('mustache', mustache());

//Comandos para informar quais rotas terá o site, sendo elas Mustache / painel e static da página static
app.use("/mustache", mainRouter); // rotas para contatos e informações de forms
app.use('/painel', painelRouter); //rotas para painel renderizar paineis e informações
app.use('/static', express.static(path.join(__dirname, '../public'))); //rotas para modo static usando a pasta public
app.use( (req: Request, res: Response) => {res.status(404).send('Página não encontrada!!')});//caso a página não seja localizada



const port = process.env.PORT || 3000;//usando o modo dotenv para buscar o valor da porta e executar

app.listen(port, ()=> {
    console.log(`Servidor logado com sucesso na porta ${port}`)
})

