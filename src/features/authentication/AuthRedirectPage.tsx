import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { NavBar } from "../../components/NavBar";
import { AppRouter } from "../../routers/AppRouter";
import { Footer } from "../../components/Footer";
import { LoginPage } from "./LoginPage";

export const AuthRedirectPage = () => {
    const context = useContext(UserContext);

    const { user } = context;

    return (
        <>
            {
                !user.bitLogeado && (
                    <LoginPage />
                )
            }
            {
                user.bitLogeado && (
                    <>
                        <NavBar />
                        <AppRouter />
                        <Footer />
                    </>
                )
            }
        </>
    )
};