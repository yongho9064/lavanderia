import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../navigation/Navigation";

const Header = () => {
    return (
        <header>
            <Navigation />
            <Outlet />
        </header>
    );
};

export default Header;
