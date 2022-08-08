import styles from "./Coins.module.scss";

export const CoinItem = (props) => {
  return (
    <div className={styles.coinRow}>
      <p>{props.coins.market_cap_rank}</p>
      <div className={styles.imgSymbol}>
        <img src={props.coins.image} alt="" />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>

      <p>${props.coins.current_price.toLocaleString()}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p className={styles.hideMobile}>${props.coins.total_volume.toLocaleString()}</p>
      <p className={styles.hideMobile}>${props.coins.market_cap.toLocaleString()}</p>
    </div>
  );
};
