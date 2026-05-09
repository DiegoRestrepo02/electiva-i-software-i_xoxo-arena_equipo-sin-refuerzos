import '../../assets/stylesHistoricalGames.css';

export const HistoricalGamesPage = () => {
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
                                <tr>
                                    <td>1</td>
                                    <td>
                                        05/05/2026 <br />
                                        <small className="text-muted">10:45 AM</small>
                                    </td>
                                    <td>
                                        <div className="mini-tablero">
                                            <div className="celda colorPosicionTableroEsO">O</div>
                                            <div className="celda colorPosicionTableroEsO"></div>
                                            <div className="celda colorPosicionTableroEsO">O</div>
                                            <div className="celda colorPosicionTableroEsO">O</div>
                                            <div className="celda colorPosicionTableroEsO"></div>
                                            <div className="celda colorPosicionTableroEsO"></div>
                                            <div className="celda colorPosicionTableroEsX">X</div>
                                            <div className="celda colorPosicionTableroEsX">X</div>
                                            <div className="celda colorPosicionTableroEsX">X</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className='me-1'>Diego Restrepo</span>
                                        <span className="badge bg-primary-subtle text-primary">Tú</span>
                                    </td>
                                    <td>
                                        <span className='me-1'>Pepito Perez</span>
                                    </td>
                                    <td>
                                        <span className="badge badge-ganaste">Ganaste</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        05/05/2026 <br />
                                        <small className="text-muted">10:32 AM</small>
                                    </td>
                                    <td>
                                        <div className="mini-tablero">
                                            <div className="celda colorPosicionTableroEsO">O</div>
                                            <div className="celda colorPosicionTableroEsX">X</div>
                                            <div className="celda colorPosicionTableroEsO">O</div>
                                            <div className="celda colorPosicionTableroEsO">O</div>
                                            <div className="celda colorPosicionTableroEsX">X</div>
                                            <div className="celda colorPosicionTableroEsO">O</div>
                                            <div className="celda colorPosicionTableroEsX">X</div>
                                            <div className="celda colorPosicionTableroEsO">O</div>
                                            <div className="celda colorPosicionTableroEsX">X</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className='me-1'>Diego Restrepo</span>
                                        <span className="badge bg-primary-subtle text-primary">Tú</span>
                                    </td>
                                    <td>
                                        <span className='me-1'>Pepito Perez</span>
                                    </td>
                                    <td>
                                        <span className="badge badge-empate">Empate</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        05/05/2026 <br />
                                        <small className="text-muted">10:21 AM</small>
                                    </td>
                                    <td>
                                        <div className="mini-tablero">
                                            <div className="celda colorPosicionTableroEsX">X</div>
                                            <div className="celda colorPosicionTableroEsX">X</div>
                                            <div className="celda colorPosicionTableroEsO">O</div>
                                            <div className="celda colorPosicionTableroEsX">X</div>
                                            <div className="celda colorPosicionTableroEsO">O</div>
                                            <div className="celda colorPosicionTableroEsO"></div>
                                            <div className="celda colorPosicionTableroEsO">O</div>
                                            <div className="celda colorPosicionTableroEsO"></div>
                                            <div className="celda colorPosicionTableroEsO"></div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className='me-1'>Diego Restrepo</span>
                                    </td>
                                    <td>
                                        <span className='me-1'>Pepito Perez</span>
                                        <span className="badge bg-primary-subtle text-primary">Él</span>
                                    </td>
                                    <td>
                                        <span className="badge badge-perdiste">Perdiste</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
};