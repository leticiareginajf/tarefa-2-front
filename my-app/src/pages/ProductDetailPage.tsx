// src/pages/ProductDetailPage.tsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import type { ProductData } from '../components/ProductCard';
import { fetchProductById } from '../services/api';

function ProductDetailPage() {
    // Hook do React Router para pegar parâmetros da URL
    const { productId } = useParams<{ productId: string }>();

    // Hook do contexto do carrinho
    const { addToCart } = useCart();

    // Estados para gerenciar os dados
    const [product, setProduct] = useState<ProductData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Função para buscar um produto específico
    const load = async (idNum: number) => {
        try {
            setIsLoading(true);
            setError(null);
            const data = await fetchProductById(idNum);
            setProduct(data);
        } catch (err) {
            const msg = err instanceof Error ? err.message : 'Erro desconhecido';
            // Se o backend devolveu 404, nossa handle() lança Error("HTTP 404 - ...")
            setError(msg.includes('404') ? 'Produto não encontrado' : `Falha ao carregar o produto: ${msg}`);
            setProduct(null);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!productId) return;
        const idNum = Number(productId);
        if (!Number.isInteger(idNum) || idNum <= 0) {
            setError('ID inválido');
            setIsLoading(false);
            return;
        }
        load(idNum);
    }, [productId]);


    // Handler para adicionar ao carrinho (versão simples, sem Context)
    const handleAddToCart = () => {
        if (product) {
            // Usar a função do contexto
            addToCart();

            // Feedback visual para o usuário
            console.log(`🛒 Adicionado ao carrinho: ${product.title}`);
            alert(`${product.title} foi adicionado ao carrinho!`);
        }
    };

    if (isLoading) {
        return (
            <div className="container text-center mt-5">
                <div className="spinner-border text-primary mb-3" role="status">
                    <span className="visually-hidden">Carregando...</span>
                </div>
                <h2>Carregando detalhes do produto...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container text-center mt-5">
                <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">❌ Erro</h4>
                    <p>{error}</p>
                    <Link to="/" className="btn btn-primary">
                        ← Voltar para a Home
                    </Link>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="container text-center mt-5">
                <div className="alert alert-warning" role="alert">
                    <h4 className="alert-heading">⚠️ Produto não encontrado</h4>
                    <p>O produto que você está procurando não existe.</p>
                    <Link to="/" className="btn btn-primary">
                        ← Voltar para a Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {product.title}
                    </li>
                </ol>
            </nav>

            <div className="row">
                {/* Imagem */}
                <div className="col-lg-6 mb-4">
                    <div className="card">
                        <img
                            src={product.imageUrl}
                            alt={product.title}
                            className="card-img-top"
                            style={{
                                maxHeight: '500px',
                                objectFit: 'contain',
                                padding: '20px'
                            }}
                        />
                    </div>
                </div>

                {/* Informações */}
                <div className="col-lg-6">
                    <h1 className="h2 mb-3">{product.title}</h1>

                    <div className="mb-4">
                        <h3 className="text-success">
                            R$ {Number(product.price).toFixed(2).replace('.', ',')}
                        </h3>
                    </div>

                    <div className="mb-4">
                        <h5>Descrição</h5>
                        <p className="text-muted">{product.description}</p>
                    </div>

                    {product.isFeatured && (
                        <span className="badge bg-primary mb-3">Destaque</span>
                    )}

                    <div className="d-flex gap-3 mb-4">
                        <button className="btn btn-success btn-lg flex-fill" onClick={handleAddToCart}>
                            <i className="bi bi-cart-plus me-2"></i>
                            Adicionar ao Carrinho
                        </button>
                        <button className="btn btn-outline-danger btn-lg">
                            <i className="bi bi-heart"></i>
                        </button>
                    </div>

                    <Link to="/" className="btn btn-outline-secondary">
                        <i className="bi bi-arrow-left me-2"></i>
                        Voltar para a lista de produtos
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailPage;