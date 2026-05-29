import { NavLink } from "react-router-dom";
import '../../assets/stylesHome.css';
import { consultarTodoTopGlobal } from "../../firebase/historialPartidasProviders";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { FaTrophy, FaCrown, FaGamepad, FaStar } from "react-icons/fa";

export const HomePage = () => {
    const context = useContext(UserContext);
    const { user } = context;
    const partidas = consultarTodoTopGlobal();

    const [posiciones, setPosiciones]: any = useState([]);

    partidas.then(result => {
        if (!result.bitExitoso) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: result.strMensajeError
            });
            return;
        }

        const datosAgrupados = Object.values(
            result.datos.reduce((acc: any, item: any) => {
                const uid = item.user_uid;

                if (!acc[uid]) {
                    acc[uid] = {
                        user_uid: uid,
                        total: 0,
                        ganadas: 0,
                        nombre: item.nombre
                    };
                }

                acc[uid].total += 1;

                if (item.ganaste) {
                    acc[uid].ganadas += 1;
                }

                return acc;
            }, {})
        );

        const datosOrdenados: any = datosAgrupados.sort((a: any, b: any) => ((b.ganadas / b.total) * 100) - ((a.ganadas / a.total) * 100));

        setPosiciones(datosOrdenados);
    });

    return (
        <>
            <div className="text-center py-5">
                <NavLink to="/game">
                    <button type="button" className="btn btn-md btn-primary w-50">¡Empieza la batalla!</button>
                </NavLink>
            </div>
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold text-light">
                        <FaTrophy className="color-trofeo" /> Top Globales
                    </h1>
                    <p className="text-secondary fs-5">
                        Los mejores jugadores de XOXO Arena
                    </p>
                </div>
                <div className="row g-4 justify-content-center mb-5">
                    <div className="col-lg-4">
                        {
                            posiciones.length >= 2 && (
                                <div className="card bg-dark border-top-2 shadow-lg rounded-4 text-center p-4">
                                    <span className="badge bg-top-2 position-absolute top-0 start-0 m-3 fs-6 rounded-4">#2</span>
                                    <div className="mb-3">
                                        <div className="avatar-top bg-icon-top-2">
                                            <FaGamepad className="color-gamepad" />
                                        </div>
                                    </div>
                                    <h3 className="text-light fw-bold">{posiciones[1].nombre}</h3>
                                    <h2 className="text-victorias fw-bold">{posiciones[1].ganadas}</h2>
                                    <p className="text-light mb-1">Victorias</p>
                                    <hr className="border-secondary" />
                                    <div className="d-flex justify-content-around text-secondary small color-estadisticas">
                                        <span><FaStar className="color-estrella" /> Tasa de victoria: {((posiciones[1].ganadas / posiciones[1].total) * 100).toFixed(2) + "%"}</span>
                                        <div className="vr mx-3"></div>
                                        <span><FaGamepad className="color-gamepad" /> {posiciones[1].total}</span>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="col-lg-4">
                        {
                            posiciones.length >= 1 && (
                                <div className="card bg-dark border-top-1 shadow-lg rounded-4 text-center p-4 position-relative">
                                    <span className="badge bg-top-1 text-white position-absolute top-0 start-50 translate-middle fs-5 rounded-4">#1</span>
                                    <div className="mb-3">
                                        <div className="avatar-top bg-icon-top-1">
                                            <FaCrown className="color-trofeo" />
                                        </div>
                                    </div>
                                    <h2 className="text-light fw-bold">{posiciones[0].nombre}</h2>
                                    <h1 className="text-victorias fw-bold">{posiciones[0].ganadas}</h1>
                                    <p className="text-light mb-1">Victorias</p>
                                    <hr className="border-secondary" />
                                    <div className="d-flex justify-content-around text-secondary small color-estadisticas">
                                        <span><FaStar className="color-estrella" /> Tasa de victoria: {((posiciones[0].ganadas / posiciones[0].total) * 100).toFixed(2) + "%"}</span>
                                        <div className="vr mx-3"></div>
                                        <span><FaGamepad className="color-gamepad" /> {posiciones[0].total}</span>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="col-lg-4">
                        {
                            posiciones.length >= 3 && (
                                <div className="card bg-dark border-top-3 shadow-lg rounded-4 text-center p-4">
                                    <span className="badge bg-top-3 position-absolute top-0 start-0 m-3 fs-6 rounded-4">#3</span>
                                    <div className="mb-3">
                                        <div className="avatar-top bg-icon-top-3">
                                            <FaGamepad className="color-gamepad" />
                                        </div>
                                    </div>
                                    <h3 className="text-light fw-bold">{posiciones[2].nombre}</h3>
                                    <h2 className="text-victorias fw-bold">{posiciones[2].ganadas}</h2>
                                    <p className="text-light mb-1">Victorias</p>
                                    <hr className="border-secondary" />
                                    <div className="d-flex justify-content-around text-secondary small color-estadisticas">
                                        <span><FaStar className="color-estrella" /> Tasa de victoria: {((posiciones[2].ganadas / posiciones[2].total) * 100).toFixed(2) + "%"}</span>
                                        <div className="vr mx-3"></div>
                                        <span><FaGamepad className="color-gamepad" /> {posiciones[2].total}</span>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="card bg-dark border-0 shadow-lg rounded-4 overflow-hidden">
                    <div className="table-responsive">
                        <table className="table table-dark align-middle mb-0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Jugador</th>
                                    <th>Victorias</th>
                                    <th>Tasa de victoria</th>
                                    <th>Partidas</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    posiciones.map((data: any, index: number) => {
                                        return (
                                            <tr key={"trPosicion_" + index}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <span className="me-1">{data.nombre}</span>
                                                    {
                                                        data.user_uid == user.uid && (
                                                            <span className="badge bg-primary-subtle text-primary">Tú</span>
                                                        )
                                                    }
                                                </td>
                                                <td>{data.ganadas}</td>
                                                <td>{((data.ganadas / data.total) * 100).toFixed(2) + "%"}</td>
                                                <td>{data.total}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
};