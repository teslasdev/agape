import React from "react";

export interface NavLink {
    name: string;
    icon?: React.ReactNode;
    link: string;
    disabled: boolean;
}