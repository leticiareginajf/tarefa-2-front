import express, { Request, Response } from 'express';



const app = express();



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


app.get('/', (req: Request, res: Response) => {
    res.json({message: 'Olá, mundo! Bem-vindo à API do nosso Catálogo de Produtos!'});
});

app.get('/api/products', (req: Request, res: Response) => {
    console.log('Requisição para /api/products recebida!');
    //res.json({message: 'Olá, mundo! Bem-vindo à API do nosso Catálogo de Produtos!'});
    res.json(mockProducts);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso em http://localhost:${PORT}`);
});


