import React from "react";
import { Head } from "../Head";

type MainLayoutProps = {
    children: React.ReactNode;
    title?: string;
};

export const MainLayout = ({ children, title = "" }: MainLayoutProps) => (
    <>
        <Head title={title} />
        {children}
    </>
);
