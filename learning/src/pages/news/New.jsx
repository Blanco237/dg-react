import React, { useEffect } from "react";
import styles from "./news.module.css";

import cubes from '../../assets/cubes.jpg'
import gaming from '../../assets/gaming.jpg'
import laptops from '../../assets/laptops.jpg'
import retro from '../../assets/retro.jpg'
import logo from '../../assets/logo.svg'
import Header from "../../components/header/header";

function News() {

  useEffect(() => {
    console.log('Rendering News')
  }, [])

  return (
    <div className={styles.body}>
        <Header />
        {/* Some useless text  */}
      <header>
        <img src={logo} alt="Newsletter Logo" />
        <nav>
          <ul>
            <li>
              <a href="google.com">Home</a>
            </li>
            <li>
              <a href="google.com">New</a>
            </li>
            <li>
              <a href="google.com">Popular</a>
            </li>
            <li>
              <a href="google.com">Trending</a>
            </li>
            <li>
              <a href="google.com">Categories</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        
        <section className={styles.content} style={{color: 'black'}}>
        {(Math.random() * 100)}
          <img src={cubes} alt="Hero" />
          <div className={styles.wrapper}>
            <h1>The Bright Future of Web 3.0?</h1>
            <div className={styles.text}>
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button>Read more</button>
            </div>
          </div>
        </section>
        <section className={styles.sidebar}>
          <h2>New</h2>

          <a href="facebook.com" className={styles.news}>
            <article>
              <h4>Hydrogen VS Electric Cars</h4>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </article>
          </a>
          <hr />
          <a href="facebook.com" className={styles.news}>
            <article>
              <h4>The Downsides of AI Artistry</h4>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </article>
          </a>
          <hr />
          <a href="facebook.com" className={styles.news}>
            <article>
              <h4>Is VC Funding Drying Up?</h4>
              <p>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </article>
          </a>
        </section>
      </main>
      <footer>
        <a href="x.com" className={styles.post}>
          <article>
            <img src={retro} />
            <div>
              <h4>01</h4>
              <h6>Reviving Retro PCs</h6>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </article>
        </a>
        <a href="x.com" className={styles.post}>
          <article>
            <img src={laptops} />
            <div>
              <h4>02</h4>
              <h6>Top 10 Laptops of 2022</h6>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </article>
        </a>
        <a href="x.com" className={styles.post}>
          <article>
            <img src={gaming} />
            <div>
              <h4>03</h4>
              <h6>The Growth of Gaming</h6>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </article>
        </a>
      </footer>
    </div>
  );
}

export default News;
