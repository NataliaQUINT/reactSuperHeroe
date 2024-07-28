import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark mb-5 text-bg-dark p-2">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtz1HyUc0mjWxiHT-Vv1VDN9LPttzXeU7YZQ8DVSN9ahjw_SlPixm3t2MAsD-8bgsj-uI&usqp=CAU" alt="Logo" className="logo" width="60" height="50" align="right"/> 
            
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink className="nav-link" to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/animes">Animes</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/comics">Comics</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/login">Logout</NavLink>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
};
