import React, { Fragment } from 'react';
import styles from '../../styles/Gallary.module.scss';
import ImageCard from './ImageCard';
import Container from 'react-bootstrap/Container';
const Gallary = () => {
  return (
    <Container className={styles.container}>
      <ImageCard className={styles.card} />
      <ImageCard className={styles.card} />
      <ImageCard className={styles.card} />
      <ImageCard className={styles.card} />
      <ImageCard className={styles.card} />
      <ImageCard className={styles.card} />
      <ImageCard className={styles.card} />
      <ImageCard className={styles.card} />
      <ImageCard className={styles.card} />
      <ImageCard className={styles.card} />
      <ImageCard className={styles.card} />
      <ImageCard className={styles.card} />
      <ImageCard className={styles.card} />
    </Container>
  );
};

export default Gallary;
