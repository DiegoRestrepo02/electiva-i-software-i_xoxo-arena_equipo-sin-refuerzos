import { db } from "./config";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

export const insertarPartida = async (dataInsertar: any): Promise<any> => {
    try {
        const res = await addDoc(collection(db, 'historial-partidas'), dataInsertar);

        return {
            bitExitoso: true,
            id: res.id
        }
    } catch (error: any) {
        return {
            bitExitoso: false,
            strMensajeError: error.message
        }
    }
};

export const consultarPartidasUsuario = async (userId: string): Promise<any> => {
    try {
        const strQueryUsar = query(
            collection(db, "historial-partidas"),
            where("user_uid", "==", userId)
        );

        const querySnapshot = await getDocs(strQueryUsar);
        let datosReturn: any = [];

        if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                datosReturn.push(doc.data());
            });
        }

        return {
            bitExitoso: true,
            datos: datosReturn
        }
    } catch (error: any) {
        return {
            bitExitoso: false,
            strMensajeError: error.message
        }
    }
};

export const consultarTodoTopGlobal = async (): Promise<any> => {
    try {
        const strQueryUsar = query(
            collection(db, "historial-partidas")
        );

        const querySnapshot = await getDocs(strQueryUsar);
        let datosReturn: any = [];

        if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                datosReturn.push(doc.data());
            });
        }

        return {
            bitExitoso: true,
            datos: datosReturn
        }
    } catch (error: any) {
        return {
            bitExitoso: false,
            strMensajeError: error.message
        }
    }
};
