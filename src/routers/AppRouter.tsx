import { Route, Routes } from "react-router-dom";
import { HomePage } from "../features/home/HomePage";
import { NotFoundPage } from "../features/not-found/NotFoundPage";
import { GamePage } from "../features/game/GamePage";
import { HistoricalGamesPage } from "../features/players/HistoricalGamesPage";
import { MyProfilePage } from "../features/players/MyProfilePage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={ <NotFoundPage /> } />
            <Route path="/" element={ <HomePage /> } />
            <Route path="/my-profile" element={ <MyProfilePage /> } />
            <Route path="/historical-games" element={ <HistoricalGamesPage /> } />
            <Route path="/game" element={ <GamePage /> } />
        </Routes>
    )
};