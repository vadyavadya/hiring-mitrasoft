import React from "react";
import { Outlet } from "react-router-dom";

import './main-page.sass'
import { NavBar } from "../../components/navbar/NavBar";


export const MainPage = () => {
    return (
        <div className="page">
            <header className="header">
                <NavBar />
            </header>
            <main className="main pt-4" >
                <Outlet />
            </main>
            <footer className="footer">
                <div className="container">
                    Vadim Sergeev 2023
                </div>
            </footer>
        </div>
    )
}
