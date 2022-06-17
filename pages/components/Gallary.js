import React, { Fragment } from 'react';
import styles from '../../styles/Gallary.module.scss';
import ImageCard from './ImageCard';
import Container from 'react-bootstrap/Container';
const Gallary = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <Container className={styles.container}>
      {data.map((item) => {
        return (
          <ImageCard
            key={item.id}
            title={item.Title}
            url={item.image_url}
            featured={item.featured}
            metafile={item.MetaFile}
            iteration={item.Iteration}
            timestamp={item.Timestamp}
          />
        );
      })}
    </Container>
  );
};

export default Gallary;
