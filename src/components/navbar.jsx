import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <a className="nav-item" href="/">Home</a>
        <a className="nav-item" href="/sobre">Sobre Nós</a>
        <a className="nav-item" href="/contato">Contato</a>
      </ul>
    </nav>
  );
};

export default Navbar;
