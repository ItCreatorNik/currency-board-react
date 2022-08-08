import { CoinItem } from "./CoinItem";
import styles from"../styles/Coins.module.scss";

export const Coins = ({coins}) => {

    return (
      <div className={styles.container}>
        <div>
          <div className={styles.heading}>
            <p>#</p>
            <p className={styles.coinName}>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p className={styles.hideMobile}>Volume</p>
            <p className={styles.hideMobile}>Mkt Cap</p>
          </div>

          {coins.map((coin) => (
            <CoinItem key={coin.id} coins={coin} />
          ))}
        </div>
      </div>
    );
};
