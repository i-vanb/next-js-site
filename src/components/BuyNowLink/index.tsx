import styles from "./BuyNowLink.module.css";

export const ItemBuyNow = () => {
    const link = "https://www.etsy.com/shop/LegenTeddy"
    return(
        <div className={styles.wrapper}>
            <a className={styles.link} href={link} target="_blank">Buy now on ETSY</a>
        </div>
    )
}