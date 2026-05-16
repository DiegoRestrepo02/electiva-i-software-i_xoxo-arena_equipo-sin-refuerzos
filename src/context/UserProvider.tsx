import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState(() => {
        const usuarioDefecto = {
            bitLogeado: false,
            strNobre: "",
            strCorreo: "",
            uid: ""
        };

        const usuarioGuardado = localStorage.getItem("usuarioAquaBattle");
        return usuarioGuardado ? JSON.parse(usuarioGuardado) : usuarioDefecto;
    });

    useEffect(() => {
        if (user) {
            if (!user.bitLogeado) {
                localStorage.removeItem("usuarioAquaBattle");
            }
            {
                localStorage.setItem("usuarioAquaBattle", JSON.stringify(user));
            }
        } else {
            localStorage.removeItem("usuarioAquaBattle");
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
};