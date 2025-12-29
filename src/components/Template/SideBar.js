import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <img
        src={`${process.env.PUBLIC_URL}/profile.jpg`}
        alt="Thomas Cavallone"
        style={{ width: '150px', borderRadius: '8px' }}
      />
      <header>
        <h2>Thomas Cavallone</h2>
        <p>
          <a href="mailto:thomasrcavallone@gmail.com">thomasrcavallone@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hello, I&apos;m Thomas Cavallone, a freshman at the University of Delaware studying
        Accounting and Business Analytics at the Alfred Lerner College of Business &amp; Economics.
        I&apos;m from Chatham, New Jersey and I&apos;m open to internships across business fields.
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
