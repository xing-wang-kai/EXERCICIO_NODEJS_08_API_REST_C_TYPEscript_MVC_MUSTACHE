import { Request, Response } from 'express';


export const nome = (req: Request, res: Response) => {
    const nome: string = req.query.nome as string;
    
    res.render('pages/nome', {
        nome: nome,
    })
}


export const idadeGet = (req: Request, res: Response) => {
    res.render('pages/idade')
}

export const idadePost = (req: Request, res: Response)=>{
    let idade: number = 0;
    let existIdade: boolean =  false;

    if(req.body.ano){
        let ano: number = Number.parseInt(req.body.ano as string);
        let anoAt: number = new Date().getFullYear();
        idade =  anoAt - ano;
        existIdade = true;
    }
    res.render('pages/idade', {
        idade,
        existIdade
    })
}