import { useContext, useState } from 'react';
import '../../assets/stylesHistoricalGames.css';
import { UserContext } from '../../context/UserContext';
import { consultarPartidasUsuario } from '../../firebase/historialPartidasProviders';
import Swal from 'sweetalert2';

export const HistoricalGamesPage = () => {
    const context = useContext(UserContext);
    const { user } = context;

    const [historial, setHistorial] = useState([]);

    const partidas = consultarPartidasUsuario(user.uid);

    partidas.then(result => {
        if (!result.bitExitoso) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: result.strMensajeError
            });
            return;
        }

        setHistorial(result.datos);
    });

    return (
        <>
            <div className='container mb-4'>
                <div className='row pt-5'>
                    <div className="col-12">
                        <h1 className="fw-bold mb-0">Historial de partidas</h1 >
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="text-secondary mb-4">Revisa tus partidas anteriores.</p>
                    </div>
                </div>
                <div className="row row-table">
                    <div className="col-12">
                        <table className="table table-hover mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th>#</th>
                                    <th>Fecha</th>
                                    <th className="text-center">Vista final</th>
                                    <th>Jugador X</th>
                                    <th>Jugador O</th>
                                    <th>Resultado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    historial.map((data: any, index) => {
                                        return (
                                            <tr key={"trHistorial_" + index}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    {data.fecha} <br />
                                                    <small className="">{data.hora}</small>
                                                </td>
                                                <td>
                                                    <div className="mini-tablero">
                                                        {
                                                            data.resultado.map((valorPosicion: string, index2: number) => {
                                                                return (
                                                                    <div key={"posicionMiniTablero_" + index2.toString()} className={`celda ${valorPosicion == "X" ? "colorPosicionTableroEsX" : "colorPosicionTableroEsO"}`}>{valorPosicion}</div>
                                                                );
                                                            })
                                                        }
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className='me-1'>{data.nombre}</span>
                                                    <span className="badge bg-primary-subtle text-primary">Tú</span>
                                                </td>
                                                <td>
                                                    <span className='me-1'>{data.nombre_oponente}</span>
                                                </td>
                                                <td>
                                                    {
                                                        data.empate ? (
                                                            <span className="badge badge-empate">Empate</span>
                                                        ) : data.ganaste ? (
                                                            <span className="badge badge-ganaste">Ganaste</span>
                                                        ) : (
                                                            <span className="badge badge-perdiste">Perdiste</span>
                                                        )
                                                    }
                                                </td>
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