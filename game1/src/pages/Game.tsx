import React from "react";
import { GameComponent } from "../components/Game";
import { MainLayout } from "../components/layouts/MainLayout";

export const Game = () => {
    return (
        <MainLayout title="Game">
            <GameComponent />
        </MainLayout>
    );
};