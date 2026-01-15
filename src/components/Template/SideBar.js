import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <img
        src={`${process.env.PUBLIC_URL}/Gavin Photo.jpeg`}
        alt="Gavin Lacy"
        style={{ width: '150px', borderRadius: '8px' }}
      />
      <header>
        <h2>Gavin Lacy</h2>
        <p>
          <a href="mailto:gavinlacy321@gmail.com">gavinlacy321@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Gavin Lacy, a Commerce student at the University of Virginia&apos;s McIntire
        School of Commerce focused on Finance and Accounting. I&apos;m from Chatham, New Jersey and
        I&apos;m interested in research, investing, and capital markets roles.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Made by Rohan Malhotra <Link to="/">rohanm.org</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
