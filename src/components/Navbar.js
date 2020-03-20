import React, { useState } from 'react'
import { Link } from 'gatsby';
import { FaAlignRight } from 'react-icons/fa';

import logo from '../images/logo.svg';

import links from '../constants/links';
import social from '../constants/social';
import styles from '../css/navbar.module.css';

const Navbar = () => {
  const [navOpen, setNav] = useState(false);

  const toggleNav = () => setNav(!navOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="backroads logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}><FaAlignRight className={styles.logoIcon} /></button>
        </div>
        <ul className={navOpen ? `${styles.navLinks} ${styles.showNav}` : styles.navLinks}>
          {links.map((link, idx) => (
            <li key={idx}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.navSocialLinks}>
          {social.map((item, idx) => (
            <a key={idx} href={item.url} target="blank">{item.icon}</a>
          ))}
        </div>

      </div>
    </nav>
  )
}

export default Navbar
