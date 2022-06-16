import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Button from 'react-bootstrap/Button';
import ImageCard from './components/ImageCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Gallary from './components/Gallary';
export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get('/api/hello')
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return <h1>{loading ? <p>Loading...</p> : <Gallary data={data} />} </h1>;
}
