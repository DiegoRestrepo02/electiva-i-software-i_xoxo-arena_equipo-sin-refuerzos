import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../../context/UserContext";
import { iniciarSession, registrarUsuario } from "../../firebase/authProviders";

export const LoginPage = () => {
    const context = useContext(UserContext);
    const { setUser } = context;

    const [txtCorreoLogin, setTxtCorreoLogin] = useState<string>("");
    const [txtClaveLogin, setTxtClaveLogin] = useState<string>("");
    const [txtNombreCompletoRegistro, setTxtNombreCompletoRegistro] = useState<string>("");
    const [txtCorreoRegistro, setTxtCorreoRegistro] = useState<string>("");
    const [txtClaveRegistro, setTxtClaveRegistro] = useState<string>("");

    const onBtnLogin = async () => {
        if (!txtCorreoLogin) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "El campo usuario es obligatorio."
            });
            return;
        }

        if (!txtClaveLogin) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "El campo contraseña es obligatorio."
            });
            return;
        }

        const result = await iniciarSession(txtCorreoLogin, txtClaveLogin);

        if (!result.bitExitoso) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Usuario o contraseña incorrectos."
            });
            return;
        }

        setUser({
            bitLogeado: true,
            strCorreo: txtCorreoLogin,
            strNombre: result.strNombre,
            uid: result.uid
        });
    };

    const onBtnRegistrarse = async () => {
        if (!txtNombreCompletoRegistro) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "El campo nombre completo es obligatorio."
            });
            return;
        }

        if (!txtCorreoRegistro) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "El campo correo es obligatorio."
            });
            return;
        }

        if (!txtClaveRegistro) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "El campo contraseña es obligatorio."
            });
            return;
        }

        const result = await registrarUsuario(txtCorreoRegistro, txtClaveRegistro, txtNombreCompletoRegistro);

        if (!result.bitExitoso) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: result.strMensaje
            });
            return;
        }

        Swal.fire({
            icon: "success",
            title: "¡Genial!",
            text: "Usuario registrado con éxito."
        }).then((result) => {
            window.location.reload();
        });
    };

    return (
        <>
            <div className="row">
                <div className="col-10 col-md-4 col-lg-4 mx-auto rounded mt-5 py-3 login-card">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center login-title mb-0">XOXO Arena</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center login-subtitle">Inicia sesión para continuar</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-3">
                            <label htmlFor="txtCorreo" className="form-label">Correo</label>
                            <input type="text" className="form-control" id="txtCorreo" value={txtCorreoLogin} onChange={(e) => setTxtCorreoLogin(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-3">
                            <label htmlFor="txtClave" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="txtClave" value={txtClaveLogin} onChange={(e) => setTxtClaveLogin(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-3 text-center">
                            <a data-bs-toggle="modal" data-bs-target="#mdlRegistro" className="textSecundario cursor-pointer">¿No tienes cuenta? Regístrate ahora</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <button type="button" className="btn btn-md btn-primary w-50" onClick={onBtnLogin}>Ingresar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="mdlRegistro" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="mdlRegistroLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="mdlRegistroLabel">¡Regístrate!</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-12 col-md-4 col-lg-4 mb-3">
                                    <label htmlFor="txtNombreModal" className="form-label">Nombre completo</label>
                                    <input type="text" className="form-control" id="txtNombreModal" value={txtNombreCompletoRegistro} onChange={(e) => setTxtNombreCompletoRegistro(e.target.value)} />
                                </div>
                                <div className="col-12 col-md-4 col-lg-4 mb-3">
                                    <label htmlFor="txtCorreoModal" className="form-label">Correo</label>
                                    <input type="text" className="form-control" id="txtCorreoModal" value={txtCorreoRegistro} onChange={(e) => setTxtCorreoRegistro(e.target.value)} />
                                </div>
                                <div className="col-12 col-md-4 col-lg-4 mb-3">
                                    <label htmlFor="txtClaveModal" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="txtClaveModal" value={txtClaveRegistro} onChange={(e) => setTxtClaveRegistro(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-md btn-primary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-md btn-primary" onClick={onBtnRegistrarse}>¡Registrarse!</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};