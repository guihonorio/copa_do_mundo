    const http=require('node:http')
    const fs=require('node:fs')
    const path=require('node:path')
    const{DatabaseSync}=require('node:sqlite');

const {databaseSync} = require('node:sqlite');

const db = new DatabaseSync(path.join(__dirname, 'meubanco.db'));

db.exec(`CREATE TABLE IF NOT EXISTS usuarios
        id INTEGER PRIMARY KEY,
        nome TEXT,
        email TEXT,
        senha TEXT`
);

    const porta=3000;

    const servidor=http.createServer(async(req,res)=>{
        if (req.url==='/api/usuarios' && req.method==='get'){
            const usuario=db.prepare('SELECT * FROM usuarios order by id desc').all();
            return;
        }

        if(req.url==='/api/usuarios' && req.method==='post'){
            let corpo='';
            for await (const pedaco of req) corpo+=pedaco;
            const dados=JSON.parse(corpo);
            db.prepare("INSERT usuarios (nome, email, senha) values") .run (dados.name, dados.email, dados.senha)
            res.end('ok');
        return;
        }

        const paginaInicial=req.url=== '/' ?  './index.html' :req.url;
        if(paginaInicial.endsWith('./css/style.css')){
            res.setHeader('Content-Type', 'text/css');
        }

        fs.readFile(path.join(__dirname, paginaInicial), (erro, conteudo) => {
        res.end(erro ? 'arquivo não encontrado':conteudo);
    });
});

servidor.listen(3000,()=>{
    console.log(`Servidor rodando em http://localhost:3000`);
});