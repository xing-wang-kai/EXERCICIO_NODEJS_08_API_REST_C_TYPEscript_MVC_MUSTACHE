import { Request, Response} from 'express';
import { Products } from '../models/Product';


export const  home = (req: Request, res: Response)=>{
    let user = {
        nome: "kai Wang",
        idade: 83
    }
    let showOld: boolean = false;

    if(user.idade > 50){
        showOld = true
    }
    let list = Products.getAll();

    res.render('pages/home', {
        user,
        showOld,
        products: list,
        frazesdoDIa: ['bom dia', 'boa tarde', 'boa noite']
        
    });
}