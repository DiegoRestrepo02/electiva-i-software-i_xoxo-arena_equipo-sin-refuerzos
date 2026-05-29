
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updatePassword, updateProfile, type User } from "firebase/auth";
import { firebaseAuth } from "./config";

export const iniciarSession = async (strCorreo: string, strClave: string): Promise<any> => {
    try {
        const response = await signInWithEmailAndPassword(firebaseAuth, strCorreo, strClave);
        const { uid, displayName } = response.user;

        return {
            bitExitoso: true,
            user: response.user,
            uid,
            strNombre: displayName
        }
    } catch (error: any) {
        return {
            bitExitoso: false,
            strMensajeError: error.message
        }
    }
};

export const registrarUsuario = async (strCorreo: string, strClave: string, strNombre: string): Promise<any> => {
    try {
        const response = await createUserWithEmailAndPassword(firebaseAuth, strCorreo, strClave);

        await updateProfile(response.user, { displayName: strNombre });

        return {
            bitExitoso: true,
            strMensaje: ""
        }
    } catch (error: any) {
        let strMensajeReturn = "No es posible realizar esta acción en estos momentos. Inténtelo más tarde.";

        if (error.code) {
            switch (error.code) {
                case "auth/email-already-in-use":
                    strMensajeReturn = "El correo ya está registrado.";
                    break;
                case "auth/invalid-email":
                    strMensajeReturn = "Correo inválido.";
                    break;
                case "auth/weak-password":
                    strMensajeReturn = "Contraseña muy débil (minimo 6 caracteres).";
                    break;
            }
        }

        return {
            bitExitoso: false,
            strMensaje: strMensajeReturn
        }
    }
};

export const actualizarUsuario = async (strClave: string, strNombre: string): Promise<any> => {
    try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
            return {
                bitExitoso: false,
                strMensaje: "No es posible realizar esta acción en estos momentos. Inténtelo más tarde."
            }
        }

        await updateProfile(user, { displayName: strNombre });

        if (strClave) {
            await updatePassword(user, strClave);
        }

        return {
            bitExitoso: true,
            strMensaje: ""
        }
    } catch (error: any) {
        let strMensajeReturn = "No es posible realizar esta acción en estos momentos. Inténtelo más tarde.";

        if (error.code) {
            switch (error.code) {
                case "auth/weak-password":
                    strMensajeReturn = "Contraseña muy débil (minimo 6 caracteres).";
                    break;
            }
        }

        return {
            bitExitoso: false,
            strMensaje: strMensajeReturn
        }
    }
};
