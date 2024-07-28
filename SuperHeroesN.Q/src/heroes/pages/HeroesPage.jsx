import { useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";
import { HeroNotFoundAlert } from "../helpers/HeroNotFoundAlert";

export const HeroesPage = () => {
    const { id } = useParams();
    const hero = getHeroById(id);

    const handleReturn = () => {
        if (hero.tipo === 'anime') {
            navigate('/animes');
        } else {
            navigate('/comics');
        }
    }

    return (
        <>
            {
                hero ? (
                    <div className="card my-5">
                        <div className="card-header text-center">
                            <h2 className="card-title">{hero.nombre}</h2>
                        </div>
                        <div className="card-body text-center">
                            <img 
                                src={`/assets/heroes/${hero.id}.jpg`} 
                                alt={hero.nombre} 
                                className="img-fluid border border-3 rounded shadow-lg w-75" 
                                style={{ borderColor: hero.tipo === 'anime' ? 'red' : 'blue' }}
                            />
                            <div className="mt-3">
                                <p className="card-text"><strong>Tipo:</strong> {hero.tipo}</p>
                                <p className="card-text"><strong>Origen:</strong> {hero.origen}</p>
                                <p className="card-text"><strong>Descripción:</strong> {hero.descripcion}</p>
                            </div>
                            <div className="mt-4">
                                <button className="btn btn-primary" onClick={handleReturn}>Volver</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <HeroNotFoundAlert />
                )
            }
        </>
    )
}
