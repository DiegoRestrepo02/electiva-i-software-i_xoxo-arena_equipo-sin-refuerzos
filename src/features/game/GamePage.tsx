import { useState } from "react";
import Swal from "sweetalert2";

export const GamePage = () => {
    const empiezaJugador1 = Math.random() < 0.5;

    const [tablero, setTablero] = useState(Array(9).fill(""));
    const [turnoJugador1, setTurnoJugador1] = useState(empiezaJugador1);

    const winner = (): string => {
        const formasGanar = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let [a, b, c] of formasGanar) {
            if (tablero[a] != "" && tablero[a] == tablero[b] && tablero[a] == tablero[c]) {
                return tablero[a];
            }
        }

        if (tablero.every((casilla) => casilla != "")) {
            return "E"
        }
        else {
            return "";
        }
    };

    const llenarPosicion = (i: number) => {
        if (tablero[i] != "" || winner() != "") {
            return;
        }

        const nuevoValorTablero = tablero;
        nuevoValorTablero[i] = turnoJugador1 ? "X" : "O";

        setTablero(nuevoValorTablero);
        setTurnoJugador1(!turnoJugador1);
    };

    const onBtnReiniciar = () => {
        setTablero(Array(9).fill(""));
        setTurnoJugador1(empiezaJugador1);
    };

    const msjReinicarPartidaCurso = () => {
        Swal.fire({
            icon: "question",
            title: "Oops...",
            text: "El campo usuario es obligatorio."
        });
        Swal.fire({
            title: "¿Empezar una nueva partida?",
            text: "La partida actual se reiniciará y no podrás recuperarla.",
            showCancelButton: true,
            confirmButtonText: "Sí, reiniciar",
            cancelButtonText: `No, cancelar`
        }).then((result) => {
            if (result.isConfirmed) {
                onBtnReiniciar();
            };
        });
    };

    return (
        <>
            <div className="row pt-4">
                <div className="col-12 text-center">
                    <h2 className="display-5 fw-bold mb-0">XOXO Arena</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <p className="fs-x-small mb-0">
                        <svg className="me-1 icono-info" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" /><path d="M12 16v-4" stroke="currentColor" /><circle cx="12" cy="8" r="1" fill="currentColor" /></svg>
                        <span className="align-middle">Recuerda que quien comienza es completamente aleatorio.</span>
                    </p>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-12 text-center">
                    {
                        !winner() && (
                            <a className="fs-x-small cursor-pointer" onClick={msjReinicarPartidaCurso}>¿Deseas reiniciar la partida en curso?</a>
                        )
                    }
                </div>
            </div>
            {
                winner() && (
                    <>
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2>{winner() == "X" ? "¡Ganaste la partida!" : (winner() == "O" ? "Lo siento, ha ganado tu oponente." : "¡Empate! Nadie ganó esta vez.")}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-3 mx-auto">
                                <button type="button" className="btn btn-md btn-primary w-100 mt-2" onClick={onBtnReiniciar}>¿Listo para jugar otra partida?</button>
                            </div>
                        </div>
                    </>
                )

            }
            {
                !winner() && (
                    <>
                        <div className="row">
                            <div className="col-12 text-center">
                                <h4>{turnoJugador1 ? "Es tu turno" : "Es turno de tu oponente"}</h4>
                            </div>
                        </div>
                    </>
                )
            }
            <div className="row mb-5 mt-3">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 mx-auto rounded p-3 tableroJuego">
                    {
                        [0, 1, 2].map((row) => {
                            return (
                                <div className="row">
                                    {[0, 1, 2].map((col) => {
                                        const posicion = (row * 3) + col;
                                        return (
                                            <div className="col-4 py-2">
                                                <button className={"w-100 btnPosicionTablero " + (tablero[posicion] == "X" ? "btnPosicionTableroEsX" : "btnPosicionTableroEsO")} onClick={() => llenarPosicion(posicion)}>
                                                    {tablero[posicion]}
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
};