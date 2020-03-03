import Head from "next/head";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Subscribe from "../components/subscribe/subscribe";

import "../global.scss";
import styles from "../index.scss";

const App = () => (
  <div className={styles.app_container}>
    <Head>
      <title>Coming Soon</title>
    </Head>
    <Header></Header>
    <main>
      <div className={styles.bg_container}>
        <img
          className={styles.bg_container_img}
          src={`${process.env.IMAGES_PATH}/bg.png`}
          alt="background"
        />
      </div>
      <div className={styles.main_container}>
        <h1 className={styles.main_container_heading}>We are launching soon</h1>
        <p className={styles.main_container_follow}>
          India's first Clinical Career Counselling Initiative
        </p>
        <div className={styles.main_container_subscribe}>
          <Subscribe></Subscribe>
        </div>
      </div>
    </main>
    <Footer> </Footer>
  </div>
);

export default App;
