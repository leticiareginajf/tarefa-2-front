import { useState } from 'react';
import './App.css'
import ProductCard, { ProductData } from './components/ProductCard';


function App(): JSX.Element{

    const appTitle: string = "Atividade 3";
    const subTitle: string = "Construindo interfaces incrivéis.";


    /*const products = [
            {
                id: 1,
                title: "Visual Studio Code",
                description: "Fully customizable. Customize your VS Code UI and layout so that it fits your coding style",
                imageUrl: "src/assets/vsc.jpeg",
                isFeatured: true,
                price: 26.60
            },
            {
                id: 1,
                title: "Android Studio",
                description: "Shape the future of apps: Join the Android community & download the SDK today. Smarter...",
                imageUrl: "src/assets/android.png",
                price: 70.00
            },
            {
                id: 3,
                title: "FrontEnd",
                description: "Telas responsivas.",
                imageUrl: "src/assets/front.png",
                price: 5.00
            },
            {
                id: 4,
                title: "BackEnd",
                description: "Telas responsivas.",
                imageUrl: "src/assets/backend.jpg",
                price: 45.00
            }
        ];*/



        const [products, setProducts] = useState<ProductData[]>([
            
            {
                id: 1,
                title: "Visual Studio Code",
                description: "Fully customizable. Customize your VS Code UI and layout so that it fits your coding style",
                imageUrl: "src/assets/vsc.jpeg",
                isFeatured: true,
                price: 26.60
            },
            {
                id: 1,
                title: "Android Studio",
                description: "Shape the future of apps: Join the Android community & download the SDK today. Smarter...",
                imageUrl: "src/assets/android.png",
                price: 70.00
            },
            {
                id: 3,
                title: "FrontEnd",
                description: "Telas responsivas.",
                imageUrl: "src/assets/front.png",
                price: 5.00
            },
            {
                id: 4,
                title: "BackEnd",
                description: "Telas responsivas.",
                imageUrl: "src/assets/backend.jpg",
                price: 45.00
            }
            
        ]);

        const addNewProduct = () => {
            const newProduct : ProductData = {
                id: products.length + 1,
                title: 'Novo Produto',
                description: 'Descricao do novo produto',
                price: 199.99,
                imageUrl: 'src/assets/front.png'
            };

            setProducts([...products, newProduct]);
        }


 
    return (

         <div className="container-fluid">
            <header
                className="py-4 px-3 m-3 text-white text-center"
                style={{ backgroundColor: '#f035a8ff' }}
            >
                <div className="container">
                    <h1 className="display-4 fw-bold">{appTitle}</h1>
                    <p className="lead col-lg-8 mx-auto">{subTitle}</p>
                </div>
            </header>

            <main className='container'>
                    <section className="my-5">
                        <h2 className="text-center mb-4">Nossos Produtos</h2>
                        <div className="row">
                
                            {products.map(product => (
                                <ProductCard
                                key={product.id}
                                product={product} />
                            ))}
                        </div>
                        
                </section>
                </main>
        </div>

        
    )
}

export default App
