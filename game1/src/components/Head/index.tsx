import React from "react";
import { Helmet } from "react-helmet-async";

type HeadProps = {
    title?: string;
}

export const Head = ({ title = "" }: HeadProps) => (
    <Helmet>
        <title>{title}{" | game1"}</title>
    </Helmet>
);
