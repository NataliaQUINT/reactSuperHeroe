import '@fortawesome/fontawesome-free/css/all.min.css'

export const Footer = () => {
  return (
    <div className="mt-2 p-4 bg-dark text-danger text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Liga de la Justicia</h5>
            <p>Super Heroes anime y cómics, unidos.</p>
          </div>
          <div className="col-md-4">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="/animes" className="text-warning">Animes</a></li>
              <li><a href="/comics" className="text-warning">Cómics</a></li>
              <li><a href="/contacto" className="text-warning">Contacto</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <p>Natalia Quinteros Alonso</p>
            <p> 133-A-Inform-V/V</p>
            <p>Estudiante:</p>
            <p>Ingeniería informática</p>
            <img src="https://img.rtve.es/imagenes/liga-justicia-superheroes-dc-abrazan-luz/1510842382232.jpg" alt="" className="logo" width="250" height="150" align="center" />  
          </div>
        </div>
        <div >
          <p>&copy; 2024.Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  )
};
