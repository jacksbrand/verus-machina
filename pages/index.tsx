import FlipBar from '../components/flip-bar';

import styles from '../styles/index.module.css';

const IndexPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Verus Machina</h1>
      </div>
      <FlipBar />
      <div>
        <h2>WEB &</h2>
        <h2>SYSTEMS</h2>
        <h3>Development</h3>
      </div>
    </div>
  );
};
export default IndexPage;
