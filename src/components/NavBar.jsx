import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const NavBar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <Navbar key={false} bg="light" expand={false} className="mb-3">
            <Container fluid='xl'>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} onClick={handleShow} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${false}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                    placement="start"
                    show={show}
                    onHide={handleClose}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                            <div className="header-title">
                                <div className="header-title__img">
                                    <Link to='/about'>
                                        <img src="/imgs/my.jpg" alt="Фото человека" />
                                    </Link>
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
    )
}
