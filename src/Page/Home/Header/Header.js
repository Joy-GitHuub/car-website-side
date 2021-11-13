import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {

    const { user, logOut, } = useAuth();

    const logo = 'https://smartdata.tonytemplates.com/caleader/wp-content/themes/caleader/assets/images/logo-dark.svg';

    return (
        <div>
            <Navbar fixed="top" className="parent-nav shadow-lg" expand="lg">
                <Container>
                    <Navbar.Brand>
                        {/* <h5><span className='text-danger'>Ca</span>Leader</h5> */}
                        <Link to="/home">
                            <img width="120px" src={logo} alt="logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navigation ms-auto">
                            <NavLink activeClassName="selected" to="/home">Home</NavLink>
                            <NavLink activeClassName="selected" to="/about">ABOUT-US</NavLink>
                            {<NavLink activeClassName="selected" to="/exploreService">Explore-Cars</NavLink>}
                            {/* <NavLink activeClassName="selected" to="/addproduct">addproduct</NavLink> */}

                            {user?.email && <NavLink activeClassName="selected" to="/dashboard">DASHBOARD</NavLink>}


                            {
                                user?.email ? <>
                                    <button onClick={logOut} className="btn btn-sm btn-danger me-2">Sign Out</button>
                                    <p className="p-0 m-0 fw-bold">{user.displayName}</p>
                                </> :

                                    <Link to="/login"><button className="btn btn-sm btn-danger">Sign In</button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;