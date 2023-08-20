import React from "react";
import { MainLayout } from "../components/layouts/MainLayout";
import { Button } from "@mui/material";

export const Home = () => (
    <MainLayout title="Home">
        <h1>Home</h1>
        <Button variant="contained" href="/game">Play</Button>
    </MainLayout>
);