import React from 'react';

const Menu = () => {
    return (
        <nav>
            <ul>
                <li key="home"><a href="/" aria-label="Home">Home</a></li>
                <li key="about"><a href="/about" aria-label="Sobre">Sobre</a></li>
                <li key="contact"><a href="/contact" aria-label="Contato">Contato</a></li>
            </ul>
        </nav>
    );
};

export default Menu;