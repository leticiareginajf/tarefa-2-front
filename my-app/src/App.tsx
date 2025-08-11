import { useState } from 'react';
import ProductCard, { ProductData } from './components/ProductCard';

function App() {
    const appTitle: string = "Minha Aplicação com React, TS e Bootstrap!";
    const subTitle: string = "Construindo interfaces incríveis, passo a passo.";

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

    const [searchTerm, setSearchTerm] = useState<string>('');

    const addNewProduct = () => {
        const newProduct: ProductData = {
            id: products.length + 1,
            title: 'Novo Produto',
            description: 'Descrição do novo produto',
            price: 199.99,
            imageUrl: '/images/generic.png'
        };

        setProducts([...products, newProduct]);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container-fluid">
            <header
                className="py-4 px-3 m-3 text-white text-center"
                style={{ backgroundColor: '#563d7c' }}
            >
                <div className="container">
                    <h1 className="display-4 fw-bold">{appTitle}</h1>
                    <p className="lead col-lg-8 mx-auto">{subTitle}</p>
                </div>
            </header>

            <main className="container">

                <section className="my-4">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Buscar produtos..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                                <span className="input-group-text">
                                    <i className="bi bi-search"></i>🔍
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="my-5">
                    <h2 className="text-center mb-4">Nossos Produtos</h2>
                    <div className="row">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))
                        ) : (
                            <div className="col-12 text-center">
                                <p className="lead">Nenhum produto encontrado com esse termo.</p>
                            </div>
                        )}
                    </div>
                </section>

                <div className="row mb-4">
                    <div className="col-md-4 mx-auto">
                        <button
                            className="btn btn-success w-100"
                            onClick={addNewProduct}
                        >
                            Adicionar Produto
                        </button>
                    </div>
                </div>

            </main>

            <footer className="mt-5 py-4 border-top">
                <p className="text-center text-muted">© {new Date().getFullYear()} Leticia Honorio. Aula de React.</p>
            </footer>
        </div >
    );
}

export default App;