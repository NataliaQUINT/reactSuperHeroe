import { Link } from "react-router-dom";

export const HeroeCard = ({ id, nombre, origen, }) => {
    const imgSrc = `/assets/heroes/${id}.jpg`;
    return (
        <div className="card mb-3 hero-card">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={imgSrc} alt={nombre} className="img-fluid hero-img" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">Origen: {origen}</p>
                        <Link to={`/hero/${id}`} className="btn btn-danger">
                            Ver más...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
