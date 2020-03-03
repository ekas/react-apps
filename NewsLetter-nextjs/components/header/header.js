import styles from "./header.module.scss";

const Header = () => (
  <>
    <header className={styles.header_container}>
      <img
        className={styles.header_container_logo}
        src={`${process.env.IMAGES_PATH}/logo.png`}
        alt="logo"
      />
      <div className={styles.header_container_social}>
        <img
          className={styles.header_container_social_tab}
          src={`${process.env.IMAGES_PATH}/facebook.png`}
          alt="facebook"
        />
        <img
          className={styles.header_container_social_tab}
          src={`${process.env.IMAGES_PATH}/instagram.png`}
          alt="instagram"
        />
        <img
          className={styles.header_container_social_tab}
          src={`${process.env.IMAGES_PATH}/linkedin.png`}
          alt="linkedin"
        />
      </div>
    </header>
  </>
);

export default Header;
