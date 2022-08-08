import styles from "./Navbar.module.scss";
import {SiBitcoinsv} from "react-icons/si"

export const Navbar = () => {

    return (
      <div className={styles.navbar}>
        <SiBitcoinsv className={styles.icon} />
        <h1>
          Crypto <span className={styles.color}>Rate</span>
        </h1>
      </div>
    );
};
