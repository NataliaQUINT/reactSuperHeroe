import { NavLink } from "react-router-dom";

export const LoginPage = () => {
    return (
      <section className="vh-100" style={{ backgroundColor: '#dc3545' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-150">
              <div className="card" style={{ borderRadius: '1rem' }}>
                <div className="row g-0">
                  <div className="col-md-8 col-lg-5 d-none d-md-block">
                    <img
                      src="https://www.mensjournal.com/.image/t_share/MTk2MTM3MzYwNzA2OTcxMTQx/batman-superman-aquaman-wonder-woman-flash-cyborg-of-the-justice-league.jpg"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: '3rem 1  3rem' }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: '#dc3545' }}></i>
                          <span className="h1 fw-bold mb-0">Super Heroes</span>
                        </div>
  
                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                        Inicie sesión en su cuenta
                        </h5>
  
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="email" id="form2Example17" className="form-control form-control-lg"  placeholder="Ingrese correo electrónico" />
                          <label className="form-label" htmlFor="form2Example17">
                          Correo electrónico 
                          </label>
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="password" id="form2Example27" className="form-control form-control-ls" placeholder="Ingrese contraseña" />
                          <label className="form-label" htmlFor="form2Example27">
                          Contraseña
                          </label>
                        </div>
                        <div className="pt-4 mb-4">
                          <button
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-danger btn-lg btn-block"
                            type="button">Ingresar </button>
                              </div>
                              <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-danger">
                              <a href="#!" className="text-body">¿Olvidaste tu contraseña?</a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };