import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/adr.jpg`} alt="" />
      </Link>
      <header>
        <h2>Adrian Afnandika</h2>
        <p><a href="adriananfnandika@gmail.com">adriananfnandika@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi there! My name is Adrian and I am a Senior Software Engineer at Flip,
        where I am responsible for maintaining the Promotion Service across Flip Products.
        I have a strong background in Golang, SQL, and Distributed Systems.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Adrian Afnandika</p>
    </section>
  </section>
);

export default SideBar;
