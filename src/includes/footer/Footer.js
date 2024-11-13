import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components
import { FaFacebook, FaTwitter, FaInstagram, FaSpotify } from 'react-icons/fa'; // Import social media icons
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-4">
            <Container>
                <Row>
                    <Col md={4} className="mb-4">
                        <h5>About Us</h5>
                        <p>
                            Metronomy is an electronic music band formed in 1999. We create innovative sounds and strive to push the boundaries of music.
                        </p>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/about" className="text-white nav-link" underline="none">About</Link>
                            </li>
                            <li>
                                <Link to="/music" className="text-white nav-link">Music</Link>
                            </li>
                            <li>
                                <Link to="/tour" className="text-white nav-link">Tour Dates</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-white nav-link">Contact</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h5>Follow Us</h5>
                        <div>
                            <Link href="https://facebook.com" className="text-white me-2" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={24} />
                            </Link>
                            <Link href="https://twitter.com" className="text-white me-2" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={24} />
                            </Link>
                            <Link href="https://instagram.com" className="text-white me-2" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={24} />
                            </Link>
                            <Link href="https://spotify.com" className="text-white" aria-label="Spotify" target="_blank" rel="noopener noreferrer">
                                <FaSpotify size={24} />
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="text-center py-3 border-top border-secondary">
                <p className="mb-0">&copy; {new Date().getFullYear()} Metronomy. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
