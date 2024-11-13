import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Custom CSS for additional styles
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    avatar: {
        width: 50,
        height: 50,
        backgroundColor: '#3f51b5', // Custom color
        cursor: 'pointer', // Show it's clickable
    },
}));

const Navbar = () => {
    const classes = useStyles()
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Metrimony
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" underline="none" className="nav-link" >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user" underline="none" className="nav-link" >
                                User
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Services" underline="none" className="nav-link" >
                                Services
                            </Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link to="/Contact" underline="none" className="nav-link" >
                                Contact
                            </Link>
                        </li>
                        <Link to="/profile" className='Login' >
                            <Avatar alt="User Avatar" className={classes.avatar}>
                            </Avatar>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;