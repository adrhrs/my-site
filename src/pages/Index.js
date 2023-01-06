import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome Folks</Link></h2>
          <p>
            A simple personal site, built in react
          </p>
        </div>
      </header>
      <p> Welcome to my website! It&apos;s great to have you here.
        On this site, you can learn more about my background
        and read about some of the projects I have worked on.
        I hope you find the information interesting and that
        it gives you a sense of who I am and what I do.
        If you have any questions or would like to get in touch,
        please don&apos;t hesitate to reach out. Thanks for visiting!
      </p>
      <img width="20%" src={`${PUBLIC_URL}/images/auto.png`} alt="" />
    </article>
  </Main>
);

export default Index;
