import styles from "./footer.module.scss";

const Footer = () => (
  <>
    <footer className={styles.footer_container}>
      <img src={`${process.env.IMAGES_PATH}/whatsapp.png`} alt="whatsapp" />
      <span className={styles.footer_number}>+91 89203 40443</span>
    </footer>
  </>
);

export default Footer;
