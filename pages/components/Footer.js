import React from 'react';
import styles from '../../styles/Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <div className={styles.footer}>Copyright {currentYear}</div>;
};

export default Footer;
