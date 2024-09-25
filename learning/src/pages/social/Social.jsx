import React from "react";
import styles from "./social.module.css";
import jes from '../../assets/avatar-jessica.jpeg'
import Header from "../../components/header/header";

function Social() {
  return (
    <div className={styles.body}>
      <Header />
      <section>
        <img
          src={jes}
          alt="Jessica"
          className={styles.jessica}
        />
        <div className={styles.about}>
          <h3>{localStorage.getItem('email')}l</h3>
          <h6>London, United Kingdom</h6>
        </div>
        <p className={styles.quote}>"Front-end developer and avid reader."</p>
        <div className={styles.btns}>
          <button>GitHub</button>
          <button>Frontend Mentor</button>
          <button>LinkedIn</button>
          <button>Twitter</button>
          <button>Instagram</button>
        </div>
      </section>
    </div>
  );
}

export default Social;
