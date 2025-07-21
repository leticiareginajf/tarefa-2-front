import './App.css'
import CardTcc from './components/CardTcc';

function App(): JSX.Element{

    const appTitle: string = "Aplicativo InDrive in Libras";
    const subTitle: string = "Construindo interfaces incrivéis, passo a passo.";
    const isUserLoggedIn: boolean = true;


    const products = [
            {
                id: 1,
                title: "Visual Studio Code",
                description: "Fully customizable. Customize your VS Code UI and layout so that it fits your coding style",
                imageUrl: "src/assets/vsc.jpeg",
                isFeatured: true,
            },
            {
                id: 1,
                title: "Android Studio",
                description: "Shape the future of apps: Join the Android community & download the SDK today. Smarter...",
                imageUrl: "src/assets/android.png"
            },
            {
                id: 3,
                title: "FrontEnd",
                description: "Telas responsivas.",
                imageUrl: "src/assets/front.png"
            },
            {
                id: 4,
                title: "BackEnd",
                description: "Telas responsivas.",
                imageUrl: "src/assets/backend.jpg"
            }
        ];

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

            <div className="container">
                <main>
                    <p className="lead" style={{fontSize: '30px', fontStyle: 'initial'}}>
                        Bem-vindo ao aplicativo de Fast Food.
                    </p>
                    <div className="my-4 p-3 bg-light rounded shadow-sm">
                        <h5 className="mb-3">Status da Aplicação</h5>
                        <p>Data de hoje: {new Date().toLocaleDateString()}</p>
                        {isUserLoggedIn ? (
                            <div className="alert alert-success" role="alert">
                                Usuário está logado! Aproveite o conteúdo.
                            </div>
                        ) : (
                            <div className="alert alert-warning" role="alert">
                                Usuário não está logado. <a href="#" className="alert-link">Faça login</a> para continuar.
                            </div>
                        )}
                    </div>

                    <section className="my-5">
                        <h2 className="text-center mb-4">Nossos Produtos</h2>
                        <div className="row">
                
                            <CardTcc
                                title={products[0].title}
                                description={products[0].description}
                                imageUrl={products[0].imageUrl}
                                isFeatured={products[0].isFeatured}
                            />
                            <CardTcc
                                title={products[1].title}
                                description={products[1].description}
                                imageUrl={products[1].imageUrl}
                                isFeatured={products[0].isFeatured}
                            />
                            <CardTcc
                                title={products[2].title}
                                description={products[2].description}
                                imageUrl={products[2].imageUrl}
                                isFeatured={products[0].isFeatured}
                            />
                             <CardTcc
                                title={products[3].title}
                                description={products[3].description}
                                imageUrl={products[3].imageUrl}
                                isFeatured={false}
                            />
                        </div>
                <div className="card-body">
                <h5 className="card-title">Formulário</h5>
                <div className="mb-2">
                    <label htmlFor="exampleInput" className="form-label">Seu Nome:</label>
                    <input type="text"
                    id="exampleInput"
                    className="form-control"
                    placeholder="Digite seu nome aqui" />
                </div>
                 <div className="mb-2">
                    <label htmlFor="exampleInput" className="form-label">E-mail:</label>
                    <input type="email"
                    id="exampleInput"
                    className="form-control"
                    placeholder="Digite seu e-mail" />
                </div>
                <button type="button" className="btn btn-primary">
                    Enviar
                </button>
            </div>   
            </section>

                </main>

                <footer className="mt-5 py-4 border-top">
                    <p className="text-center text-muted">© {new Date().getFullYear()} Letícia Honório/InDrive in Libras.</p>
                </footer>
            </div>
        </div>
    )
}

export default App
