import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../../context/UserContext";

export const LoginPage = () => {
    const context = useContext(UserContext);
    const { setUser } = context;

    const [usuario, setUsuario] = useState<string>("");
    const [clave, setClave] = useState<string>("");

    const onBtnLogin = () => {
        if (!usuario) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "El campo usuario es obligatorio."
            });
            return;
        }

        if (!clave) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "El campo contraseña es obligatorio."
            });
            return;
        }

        if (!(usuario == "admin" && clave == "123")) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Usuario o contraseña incorrectos."
            });
            return;
        }

        setUser({
            logged: true,
            email: "losnoob29@gmail.com",
            name: "Diego Restrepo"
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
                            <label htmlFor="txtUsuario" className="form-label">Usuario</label>
                            <input type="text" className="form-control" id="txtUsuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-3">
                            <label htmlFor="txtClave" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="txtClave" value={clave} onChange={(e) => setClave(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-3 text-center">
                            <a data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="textSecundario cursor-pointer">¿No tienes cuenta? Regístrate ahora</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <button type="button" className="btn btn-md btn-primary w-50" onClick={onBtnLogin}>Ingresar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">¡Regístrate!</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-12 col-md-4 col-lg-4 mb-3">
                                    <label htmlFor="txtNombreModal" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="txtNombreModal" />
                                </div>
                                <div className="col-12 col-md-4 col-lg-4 mb-3">
                                    <label htmlFor="txtApellidoModal" className="form-label">Apellido</label>
                                    <input type="text" className="form-control" id="txtApellidoModal" />
                                </div>
                                <div className="col-12 col-md-4 col-lg-4 mb-3">
                                    <label htmlFor="txtCorreoModal" className="form-label">Correo</label>
                                    <input type="text" className="form-control" id="txtCorreoModal" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-4 col-lg-4 mb-3">
                                    <label htmlFor="txtUsuarioModal" className="form-label">Usuario</label>
                                    <input type="text" className="form-control" id="txtUsuarioModal" />
                                </div>
                                <div className="col-12 col-md-4 col-lg-4 mb-3">
                                    <label htmlFor="txtClaveModal" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="txtClaveModal" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-md btn-primary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-md btn-primary">¡Registrarse!</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};