import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main description="Gavin's personal website.">
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Gavin Lacy</Link>
          </h2>
          <p>
            Commerce Student at the University of Virginia (McIntire School of Commerce).
          </p>
        </div>
      </header>
      <div className="hero">
        <img
          src={`${process.env.PUBLIC_URL}/UVA Logo.jpeg`}
          alt="University of Virginia - McIntire School of Commerce"
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
