import React from "react";
import { Outlet } from "react-router-dom";

import './main-page.css'
import { NavBar } from "../NavBar";


export const MainPage = () => {
    return (
        <div className="page">
            <header className="header">
                <NavBar />
            </header>
            <main className="main">
                <Outlet />
            </main>
            <footer className="footer">
                <div className="container">
                    Vadim Sergeev
                </div>
            </footer>
        </div>
    )
}
