import {Container} from "@/layouts/container";
import styles from './Product.module.css';
import {Item} from "@/interfaces/item";
import {ItemSlider} from "@/components/ItemSlider";
import {ItemBuyNow} from "@/components/BuyNowLink";


export const Product = (props:Item) => {


    return(
        <Container>
            <div className={styles.wrapper}>
                <div className={styles.slider}>
                    <ItemSlider id={props.id} images={props.images} thumbnails={props.thumbnails} />
                    <ItemBuyNow />
                </div>
                <div className={styles.info}>
                    <div className={styles.name}>
                        {props.name}
                    </div>
                    <p>{props.desc}</p>
                    {props.recommendations?.map(text => <p className={styles.subtitle} key={text}>{text}</p>)}
                </div>
            </div>
        </Container>
    )
}


