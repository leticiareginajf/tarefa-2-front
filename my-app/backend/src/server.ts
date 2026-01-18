import express, { Request, Response } from 'express';
import cors from 'cors';
//import { PrismaClient } from '@prisma/client'

const app = express();

//const prisma = new PrismaClient();

app.use(cors({origin: 'http://localhost:5173'}));



const PORT = 3001;

export interface ProductData{
    id: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    isFeatured?: boolean;
}


const mockProducts = [
    {
        id: 1,
        title: "Visual Studio Code",
        description: "Fully customizable. Customize your VS Code UI and layout so that it fits your coding style.",
        price: 26.60,
        imageUrl: "src/assets/vsc.jpeg",
        isFeatured: true
    },
    {
        id: 2,
        title: "Android Studio",
        description: "Shape the future of apps: Join the Android community & download the SDK today. Smarter...",
        price: 70.00,
        imageUrl: "src/assets/android.png"
    },
    {
        id: 3,
        title: "FrontEnd",
        description: "Telas responsivas.",
        price: 5.00,
        imageUrl: "src/assets/front.png",
        isFeatured: true
    },
    {
        id: 4,
        title: "BackEnd",
        description: "Telas Responsivas.",
        price: 45.00,
        imageUrl: "src/assets/backend.jpg"
    }
];


app.get('/', (_req: Request, res: Response) => {
    res.json({ok: true, msg: 'API de Produtos no ar!'});
});


/*app.get('/api/products', async (_req: Request, res: Response) => {

    try{
        const products = await prisma.product.findMany();
       return res.status(200).json(products);
    }catch(error){
        //console.error('Erro ao buscar produtos:', error);
        return res.status(500).json({error: 'Erro ao listar produtos'});
    }
});


/*app.get('/api/products/:id', async (req: Request, res: Response) => {

    const id = Number(req.params.id);

    if(!Number.isInteger(id) || id <= 0){
        return res.status(400).json({error: 'ID inválido. Use um inteiro positivo.'});
    }

    try{
        const product = await prisma.product.findUnique({
            where: {id}
        });

        if(!product){
            return res.status(404).json({error: 'Produto não encontrado.'});
        }

        return res.status(200).json(product);

    }
    catch(error){
        return res.status(500).json({error: 'Erro ao buscar produto.'});
    }
});
*/


app.get('/', (req: Request, res: Response) => {
    res.json({message: 'Olá, mundo! Bem-vindo à API do nosso Catálogo de Produtos!'});
});

app.get('/api/products', (req: Request, res: Response) => {
    console.log('Requisição para /api/products recebida!');
    //res.json({message: 'Olá, mundo! Bem-vindo à API do nosso Catálogo de Produtos!'});
    res.json(mockProducts);
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando com sucesso em http://localhost:${PORT}`);
});


