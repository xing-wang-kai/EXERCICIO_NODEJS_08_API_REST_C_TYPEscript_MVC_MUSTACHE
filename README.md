
---------------------------------------------------------------------
                            [[ ts-node ]]
---------------------------------------------------------------------

    [ npm install ts-node]
    [ npm install @types/node ]

usado para codificar liguagem .ts do typescript e rodar diretament.

para rodar o TS-node adicionamos em packjson ou só rodamos o comando.

    "start-ts": "ts-node src/app.ts",
    
    
Rodar o ts-code com nodemon
    "ts-nodemon": "nodemon -e ts,js,mustache src/App.ts "

---------------------------------------------------------------------
                            [[DOTENV]]
---------------------------------------------------------------------

dotenv especifica um arquivo na raiz do projeto chamdo .env neste arquivo
podemos declarar váriaveis e então envacalas em nossos projeto apartir do import
do dot env.

##Para installar o dotenv 

        [  npm install dotenv --save  ]

Então criamos uma váriavel no diretório do projeto chamado .env e declarmos
as váriaveis tais como a documentação orienta: 

S3_BUCKET="YOURS3BUCKET"
SECRET_KEY="YOURSECRETKEYGOESHERE"

para invocar no projeto esta váriaveis então usamos o seguinte processo.

            import 'dotenv/config';

            var port = process.env.PORT 
---------------------------------------------------------------------
                            [[ CORS ]]
---------------------------------------------------------------------
Define o acesso aos caminhos do urls e os tipos de acesso permitidos tais
como os componetes ou até mesmo alguns itens expecificos como origin e headers

para usar o CORS

        [  npm install cors ]

após instalar o cor usamos ele da seguinte maneira em osso arquivo principal

        import cors from 'cors';

        app.use((req, res, next) => {
                res.header('Acess-Control-Allow-Origin', 'http://localhost:3001')
                res.header('Acess-Control-Allow-Methods', "GET, POST, PUT, DELETE")
                res.header('Acess-Control-Allow-Headers', "X-PINGOTHER, Content-Type, Authorization")
                app.use(cors())
                next()
            })


---------------------------------------------------------------------
                            [[ PATH ]]
---------------------------------------------------------------------
A biblioteca PATH pode ser usada para auxiliar com o uso de caminhos para pastas
uma vez que o projeto iniciado a pasta deve está statica no seu uso. exemplo.

        [  npm install --save path  ]

    import path from 'path';

    app.use('/' express.static( path.join( __dirname, 'public')))

Todos caminhos puxado no url serão direcionado a herarquia da pasta public e rodados
seus documentos dentro desta mesma pasta.


---------------------------------------------------------------------
                            [[MUSTACHE]]
---------------------------------------------------------------------
##USANDO MUSTACHE

-primeiro precisamos instalar o mustache como 

        [ npm install mustache-express]
        [ npm install @types/mustache-Express]

Após a instalação do Mustache precisamos então associar mesmo ao nodemon
para isso podemos coloar o mesmo como intermedio do nodemon 

[ nodemon -e ts/js/mustache <rota do arqv> ]

com este comando o Mustache será executado em nosso nodemon a cada atualização.

na página APP.js onde instalamos as config do app executamos os seguites comandos.

+--------------------------------------------------

            import mustache from 'mustache-express';

            app.set('view engine' , 'mustache');
            app.set('views', path.join( __dirname, 'views' ))
            app.engine('mustache', mustache());

+---------------------------------------------------

Com este comandos executados dentro do app.js então podemos ir nas rotas.
em rotas onde temos nosso index com nosso controllers podemos chamar o mustache
com a função render();

+---------------------------------------------------

                router.get('/', (req, res) => {
                    render('views')
                })
+---------------------------------------------------


o mustache está sendo chamado da páginas views então podemos 
definir algumas váriaveis e usálas no mustache.

            router.get('/' (req, res) =>{
                const user = {
                    name: 'nome',
                    idade: 'idade'
                }
                render('views' {
                    user;
                })
            })

+-----------------------------------------------------

com o código informado podemos criar um arquivo .mustache em nossa
pasta views e construir um html
a váriavel acima então pode ser envocada dentro desta rota do mustache
usando os bigodes como chaves {{ user.me }}

+------------------------------------------------------


##DEFINIR IF E ELSE NO MUSTACHE


Também podemos definir um loop if dentro do mustache, mas antes precisamos
informa que a situação verdadeira ou false dentro da rota. 
+--------------------------------------------------------

                router.get('/' (req, res) =>{
                    const user = {
                        name: 'nome',
                        idade: 'idade'
                    }
                    var isOld = false;
                    if ( user.idade > 60 ){
                        isOld = true;
                    }
                    render('views' {
                        user;
                    })
                })
+-----------------------------------------------------

No arquivo mustache o loop if e else é definido da seguinte forma

                {{#isOld}}              //inicia a condicional= if(isOld === true) { }
                {{/isOld}}              //fecha a condicional

                {{^isOld}}              //Abre o else 
                {{/isOld}}              //fecha o else

Entre o abrir e fechar do bigodes if  podemos colocar o valor que retorna da condição.

+----------------------------------------------------------
##LOOPING FOR COM MUSTACHE e ARRAYS

O looping for pode ser executados para arrays, como no exemplo abaixo, defimos valores de 
um array para o mustache, cada um dos valores é um dictionary

            router.get('/' (req, res) =>{
                
                
                render('views' {
                    Produtos: [
                        {titulo: "vestido", valor: 150.80}
                        {titulo: "calças", valor: 150.80}
                        {titulo: "bermudas", valor: 150.80}
                        {titulo: "shortes", valor: 150.80} 
                    ]
                })
            })

Quando trata-se de um valor array podemos definir tal como um if
e else do mustache ele traduz a função como um for ex.;

            {{#produtos}}
                <p>{{titulo}} e R$ {{valor}}</p>
            {{/protudos}}

            {{^produtos}}
                Nenhum produto encontrado.
            {{/protudos}}

no exemplo acima será renderizado no mustache vária linhas p para
cada um dos itens encontrados em produtos. caso não haja itens retorna o else

no caso dos valors do array não serem um dictionary somente um valor puro. 
nesta situação podemos envocar o item como:

    {{.}}

+----------------------------------------------------------------------

###COMPONETES ---

    Podemos criar alguns componetes no mustache e então envocar os mesmo dentro do 
    arquivo .mustache, no exemplo deste código foram criados alguns compoentes 
    para chamar o componete colocamos os bigodes {{ }} e dentro do mesmo então 
    usamos o simbolo > e direciomamos o diretório dentro da pasta views ex;
    
    {{ > partials/header }}

Todo conteudo que está em header.mustache será renderizado dentro do conteúdo que foi
chamado a função e assim poderemos usar o mesmo no mustache.

+======================================================================
