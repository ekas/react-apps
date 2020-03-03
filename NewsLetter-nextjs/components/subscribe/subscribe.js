import styles from "./subscribe.module.scss";
import { useState } from "react";

const Subscribe = () => {
  const [submitted, isSubmitted] = useState(0);
  return (
    <>
      <span className={styles.subscribe_text}>
        Book your free session today with us
      </span>
      {submitted ? (
          <div className={styles.subscribe_thanks_text}>Thanks for Subscribing!</div>
      ) : (
        <div className={styles.subscribe_input}>
          <input
            className={styles.subscribe_input_box}
            type="text"
            placeholder="Email"
          />
          <input
            className={styles.subscribe_input_btn}
            onClick={() => isSubmitted(1)}
            type="submit"
            value="Subscribe"
          />
        </div>
      )}
      
    </>
  );
};

export default Subscribe;
