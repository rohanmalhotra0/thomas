import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main description="Thomas's personal website.">
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Thomas Cavallone</Link>
          </h2>
          <p>
            Freshman at the University of Delaware studying Accounting and Business Analytics.
          </p>
        </div>
      </header>
      <div className="hero">
        <img
          src={`${process.env.PUBLIC_URL}/delaware logo.jpeg`}
          alt="University of Delaware - Lerner Business & Economics"
          className="hero-logo"
        />
        <div className="cta-buttons">
          <Link to="/resume" className="button big button--primary">
            View Resume
          </Link>
          <Link to="/stats" className="button big">
            Research
          </Link>
        </div>
      </div>
      <p>
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, check out my{' '}
        <Link to="/resume">resume</Link>, and explore my{' '}
        <Link to="/projects">projects</Link>.
      </p>
    </article>
  </Main>
);

export default Index;
