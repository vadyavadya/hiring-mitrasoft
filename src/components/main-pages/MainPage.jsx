import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './main-page.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const MainPage = () => {
    return (
        <div className="page">
            <header className="header">

                <Navbar key={false} bg="light" expand={false} className="mb-3">
                    <Container fluid>
                        {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${false}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                            placement="start"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                                    <div className="header-title">
                                        <div className="header-title__img">
                                            <img src="imgs/my.jpg" alt="Фото человека" />
                                        </div>
                                        <div className="header-title__info">
                                            <div className="header-title__name">Вадим Сергеев</div>
                                            <div className="header-title__mail"><a href="mailto:nbvcvbn1@mail.ru">nbvcvbn1@mail.ru</a></div>
                                        </div>
                                    </div>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? 'navlink active' : 'navlink'
                                        }
                                        to={'/'}
                                    >
                                        Посты
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? 'navlink active' : 'navlink'
                                        }
                                        to={'/about'}
                                    >
                                        Обо мне
                                    </NavLink>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
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
