import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {Navbar, Nav, Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Layout = () => {
    const [sticky, setSticky] = useState(false);

    // Add sticky class to navbar when user scrolls down
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 15);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Navbar bg="white" expand="lg" className="px-sm-5 px-2" fixed={sticky ? "top" : ""} style={{minHeight: sticky ? "60px": "90px", opacity: sticky ? 0.9 : 1}}>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img src="img/logo.png" className="img-fluid" alt="Yale Skateboarding Logo" width="70px" />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ps-lg-4 ps-1">
                        <LinkContainer to="/about">
                            <Nav.Link>ABOUT</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/blogs">
                            <Nav.Link>BLOGS</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>CONTACT</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div style={{height: sticky ? "90px" : "0px"}}></div>
            
            <Outlet />

            <Container fluid className="mt-5">
                <hr />
                <p className="text-center">© 2023 Yale Skateboarding Club</p>
            </Container>
        </>
    );
};

export default Layout;
