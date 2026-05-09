import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const NavBar = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("UserContext must be used within UserProvider");
    }

    const { user, setUser } = context;

    const onBtnCerrarSession = () => {
        setUser({
            logged: false,
            name: "",
            email: ""
        });
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary colorFondoNavbar">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/game">¡Empieza la batalla!</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/historical-games">Historial</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle btnCierreSession" data-bs-toggle="dropdown">{user.name}</button>
                                <ul className="dropdown-menu dropdown-menu-end listaCierreSession">
                                    <li>
                                        <a className="dropdown-item" href="/my-profile">{user.email}</a>
                                    </li>
                                    <li>
                                        <a onClick={onBtnCerrarSession} className="dropdown-item cursor-pointer">Cerrar sesión</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};