import { useState, useEffect } from 'react';
import ProductCard, { ProductData } from './components/ProductCard';
import ProductForm, { ProductFormData } from './components/ProductForm';

const initialProductsData: ProductData[] = [
    {
                id: 1,
                title: "Perfume 212",
                description: "212 Sexy é frequentemente citado como uma excelente opção, especialmente para ocasiões especiais e para quem aprecia fragrâncias mais adocicadas e sensuais. O 212 VIP também é muito popular",
                imageUrl: "src/assets/212.jpg",
                isFeatured: true,
                price: 264.60
            },
            {
                id: 1,
                title: "Dolce Gabana",
                description: "Com frescor acentuado e fundo amadeirado intensificado, a fragrância traz notas vibrantes de limão siciliano e maçã verde, equilibradas por um delicado buquê floral e a sensualidade do cedro",
                imageUrl: "src/assets/dolce.jpg",
                price: 770.00
            },
            {
                id: 3,
                title: "Lancôme La Vie Est Belle Eau De Parfum ",
                description: "Um perfume feminino encantador, La Vie Est Belle traz uma nova categoria olfativa: iris gourmand, os mais preciosos ingredientes naturais, uma moderna interpretação de uma fragrância oriental com um toque gourmand.",
                imageUrl: "src/assets/lavie.jpg",
                price: 1300.00
            },
            {
                id: 4,
                title: "Carolina Herrera Good Girl",
                description: "Seu aroma enigmático começa com uma explosão envolvente, evolui para um buquê floral hipnotizante e termina com uma assinatura quente e inconfundível.",
                imageUrl: "src/assets/carolina.jpg",
                price: 45.00
            },
             {
                id: 5,
                title: "Prada",
                description: "Nas notas de topo, Pera, Tangerina e Bergamota trazem uma abertura refrescante e intensa. No coração da fragrância, a Flor de Laranjeira, Neroli e Jasmin. No fundo da fragrância, a Baunilha, o Âmbar Branco e o Almíscar completam com sensualidade e intensidade.",
                imageUrl: "src/assets/prada.png",
                price: 1545.00
            }
];

function App() {
    const appTitle: string = "Catálogo de Perfumes Importados"; 
    const subTitle: string = "Adicione, filtre e explore nossos produtos!";  

    const [products, setProducts] = useState<ProductData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        console.log("useEffect (Dados Iniciais): Montagem do App - Buscando dados...");
        setTimeout(() => {
            setProducts(initialProductsData);
            setIsLoading(false);
            console.log("useEffect (Dados Iniciais): Dados carregados!");
        }, 5000);
    }, []); 

    useEffect(() => {
        if (searchTerm) {
            document.title = `Buscando: ${searchTerm} - Catálogo`;
        } else {
            document.title = 'Catálogo de Produtos Interativo';
        }
        console.log(`useEffect (Título): Título atualizado para: '${searchTerm}'`);


        return () => {
            console.log(`useEffect (Título) - Cleanup: searchTerm ANTERIOR era: '${searchTerm}'`);
        };
    }, [searchTerm]); 
    const handleAddProduct = (newProductData: ProductFormData) => {
        const newProductWithId: ProductData = {
            ...newProductData,
            id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
        };
        setProducts(prevProducts => [...prevProducts, newProductWithId]);
    };

    const handleAddToCart = (productId: number) => {
        const productToAdd = products.find(p => p.id === productId);
        if (productToAdd) {
            console.log(`Adicionado ao carrinho (simulado): ${productToAdd.title} (ID: ${productId})`);
        } else {
            console.warn(`Tentativa de adicionar produto com ID inexistente: ${productId}`);
        }
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (isLoading) {
        return (
            <div className="container text-center mt-5">
                <h2 className="mb-3">⏳ Carregando produtos...</h2>
                <p className="text-muted">Aguarde um momento, estamos buscando os dados!</p>
            </div>
        );
    }

    return (
        <div className="container-fluid bg-light min-vh-100">
            <header
                className="py-4 px-3 mb-4 text-white text-center shadow-sm"
                style={{ backgroundColor: '#FF7F50' }}
            >
                <div className="container">
                    <h1 className="display-4 fw-bold">{appTitle}</h1>
                    <p className="lead col-lg-8 mx-auto">{subTitle}</p>
                </div>
            </header>

            <main className="container">
                <div className="row">
                    
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <section>
                            <ProductForm onAddProduct={handleAddProduct} />
                        </section>
                    </div>


                    <div className="col-lg-8">
                        <section className="mb-4 p-3 card shadow-sm"> 
                            <h3 className="mb-3 text-center">Buscar Produtos</h3>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Digite o nome do produto..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                                <span className="input-group-text">
                                    <i className="bi bi-search"></i>
                                </span>
                            </div>
                        </section>

                        <section className="my-4">
                            <h2 className="text-center mb-4">Nossos Produtos ({filteredProducts.length})</h2>
                            <div className="row">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map(product => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                            onAddToCart={handleAddToCart}
                                        />
                                    ))
                                ) : (
                                    <div className="col-12 text-center">
                                        <div className="alert alert-info" role="alert">
                                            <p className="lead mb-0">
                                                {searchTerm
                                                    ? "Nenhum produto encontrado com esse termo."
                                                    : "Nenhum produto cadastrado ainda."}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <footer className="mt-5 py-4 border-top bg-white">
                <p className="text-center text-muted">© {new Date().getFullYear()} Perfumes Importados. Atividade 3.</p>
            </footer>
        </div>
    );
}

export default App;