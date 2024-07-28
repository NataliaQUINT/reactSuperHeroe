import { NavLink } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img
                src="https://www.shutterstock.com/shutterstock/photos/1736077703/display_1500/stock-vector-pop-art-superheroes-comic-book-page-layout-seamless-pattern-background-vintage-comics-design-vector-1736077703.jpg"
                className="card-img-top"
                alt="Comics"
              />
              <div className="card-body">
                <h5 className="card-title">Comics</h5>
                <p className="card-text">Explora Heroes y villanos.</p>
              </div>
              <div className="card-footer">
                <NavLink to="/details" className="btn btn-danger mt-2">
                  Ver más
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQndpMC58owqMQQd1OeEqlf2SYULWZlxEgBkAByyzafiTnOd5SVu-llW9oDJcjj3so-tw&usqp=CAU"
                className="card-img-top"
                alt="Anime"
              />
              <div className="card-body">
                <h5 className="card-title">Anime</h5>
                <p className="card-text">
                  Descubre tus personajes de Anime e identifica tu favorito.
                </p>
              </div>
              <div className="card-footer">
                <NavLink to="/details" className="btn btn-danger mt-2">
                  Ver más
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 text-center bg-dark text-white">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThHPIM4KDcsHZfIMIbo9PsBdnuLu7r80MNnBWX5mTp3q38bdjv8UGR4aZIi8khbJP216M&usqp=CAU"
                className="card-img-top"></img>
              <div className="card-body">
                <h5 className="card-title">Login/Logout </h5>
                <p className="card-text">Por favor, selecciona una opción para continuar.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                  <NavLink to="/login" className="btn btn-warning">Iniciar sesión</NavLink>
                  <NavLink to="/logout" className="btn btn-warning ml-2">Cerrar sesión</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
