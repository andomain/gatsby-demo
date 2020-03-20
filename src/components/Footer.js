import React from 'react'
import { Link } from 'gatsby';
import links from '../constants/links';
import social from '../constants/social';

import styles from '../css/footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((link, idx) => (
          <Link key={idx} to={link.path}>{link.text}</Link>
        ))}
      </div>
      <div className={styles.icons}>
        {social.map((item, idx) => (
          <a key={idx} href={item.url} target="blank">{item.icon}</a>
        ))}
      </div>
      <div className={styles.copyright}>
        Copyright &copy; Andomain Design {new Date().getFullYear()}. All rights reserved
      </div>
    </footer>
  )
}
