import { useState, useEffect } from 'react';

import flipText from '../data/flipText_DATA';

import styles from '../styles/index.module.css';

const IndexPage = () => {
  const [flip1, setFlip1] = useState('');
  const [flip2, setFlip2] = useState('');
  const [flip3, setFlip3] = useState('');

  const fetchRandomFlipText = () => {
    let textToShow = flipText[Math.floor(Math.random() * flipText.length)];
    setFlip1(textToShow);
  };

  useEffect(() => {
    const timeout = setInterval(() => {
      fetchRandomFlipText();
    }, 1000);

    return function cleanup() {
      clearInterval(timeout);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h1>Verus Machina</h1>
      </div>
      <div className={styles.flipcontainer}>
        <p>{flip1}</p>
        <p>{flip2}</p>
        <p>apples</p>
      </div>
      <div>
        <h2>WEB &</h2>
        <h2>SYSTEMS</h2>
        <h3>Development</h3>
      </div>
    </div>
  );
};
export default IndexPage;
