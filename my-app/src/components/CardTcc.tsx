interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    isFeatured?: boolean;
}


function CardTcc({
    title,
    description,
    imageUrl,
    isFeatured
}: CardProps) {
    return(
        <div className="col-md-4 mb-4">
            <div className="card h-100 border">
                {isFeatured && (
                    <div className="position-absolute top-0 end-0 p-2">
                        <span className="badge bg-primary">Destaque</span>
                    </div>
                )}


                <img 
                src={imageUrl}
                className="card-img-top" 
                alt={title}
                style={{height: '200px', objectFit: 'cover'}} 
                />

                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text mb-3">{description}</p>
                    <a href="#" className="btn btn-primary">
                        Ver Detalhes
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CardTcc;