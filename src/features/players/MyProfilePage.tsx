import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import Swal from "sweetalert2";
import { actualizarUsuario } from "../../firebase/authProviders";

export const MyProfilePage = () => {
    const context = useContext(UserContext);
    const { user, setUser } = context;

    const [txtNombreCompleto, setTxtNombreCompleto] = useState<string>(user.strNombre);
    const [txtCorreo, setTxtCorreo] = useState<string>(user.strCorreo);
    const [txtClave, setTxtClave] = useState<string>("");

    const onBtnUpdate = async () => {
        if (!txtNombreCompleto) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "El campo nombre completo es obligatorio."
            });
            return;
        }

        let bitReturnCambiarClave = false;

        if (!txtClave) {
            await Swal.fire({
                title: "No se detectó una nueva contraseña.",
                text: "¿Desea continuar sin actualizarla?",
                showCancelButton: true,
                confirmButtonText: "Continuar",
                cancelButtonText: `Cambiar contraseña`,
                confirmButtonColor: '#00B4D8',
            }).then((result) => {
                if (!result.isConfirmed) {
                    bitReturnCambiarClave = true;
                };
            });
        }

        if (bitReturnCambiarClave) {
            return;
        }

        const result = await actualizarUsuario(txtClave, txtNombreCompleto);

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
            text: "Usuario actualizado con éxito.\n Inicia sesión nuevamente."
        }).then((result) => {
            setUser({
                bitLogeado: false,
                strNombre: "",
                strCorreo: "",
                uid: ""
            });
        });
    };

    return (
        <>
            <div className="text-center py-5">
                <h2 className="display-5 fw-bold mb-3">Mi Perfil</h2>
            </div>
            <div className="row mt-3">
                <div className="col-12 col-md-4 col-lg-4 mb-3">
                    <label htmlFor="txtNombre" className="form-label">Nombre completo</label>
                    <input type="text" className="form-control" id="txtNombre" value={txtNombreCompleto} onChange={(e) => setTxtNombreCompleto(e.target.value)} />
                </div>
                <div className="col-12 col-md-4 col-lg-4 mb-3">
                    <label htmlFor="txtCorreo" className="form-label">Correo</label>
                    <input type="text" className="form-control" id="txtCorreo" value={txtCorreo} onChange={(e) => setTxtCorreo(e.target.value)} />
                </div>
                <div className="col-12 col-md-4 col-lg-4 mb-3">
                    <label htmlFor="txtClave" className="form-label">Nueva Contraseña</label>
                    <input type="password" className="form-control" id="txtClave" value={txtClave} onChange={(e) => setTxtClave(e.target.value)} />
                </div>
            </div>
            <div className="row mt-3 mb-5">
                <div className="col-sm-12 col-md-4 col-lg-4 text-center mx-auto">
                    <button type="button" className="btn btn-md btn-primary w-100" onClick={onBtnUpdate}>¡Actualizar!</button>
                </div>
            </div>
        </>
    )
};