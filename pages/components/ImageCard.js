import React from 'react';
import styles from '../../styles/ImageCard.module.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const Image = (props) => {
  const { id, title, url, featured, metafile, iteration, timestamp } = props;
  console.log(title);

  return (
    <Card style={{ width: '15rem' }} className={styles.card}>
      <Card.Img variant='top' src={url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant='primary'>{title}</Button>
      </Card.Body>
    </Card>
  );
};

export default Image;
