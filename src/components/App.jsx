import React from 'react';
import '.././styles/index.scss';
import Recipes from './Recipes';
import sword from '../images/swc-sword.png';
import swordSvg from '../images/sword.svg';

export default function App() {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>hehehe</h1>
        </section>
      </main>
      <img src={sword} alt="sword" width="250" />
      <img src={swordSvg} alt="sword" width="250" />
      <Recipes />
    </>
  );
}
