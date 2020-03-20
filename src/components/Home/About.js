import React from 'react';
import Title from '../Title';

import styles from '../../css/about.module.css';

import img from '../../images/defaultBcg.jpeg';

const About = () => (
  <section className={styles.about}>
    <Title title="About" subtitle="us" />
    <div className={styles.aboutCenter}>
      <article className={styles.aboutImg}>
        <div className={styles.imgContainer}>
          <img src={img} alt="" />
        </div>
      </article>
      <article className={styles.aboutInfo}>
        <h4>Explore the difference</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales pharetra dui.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales pharetra dui.</p>
        <button className="btn-primary" type="button">Read more</button>
      </article>
    </div>
  </section>
);

export default About;
