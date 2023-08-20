import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Game } from "../pages/Game";

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={Home()} />
            <Route path="/game" element={Game()} />
        </Routes>
    </BrowserRouter>
);