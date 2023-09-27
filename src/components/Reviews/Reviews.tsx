import styles from './Reviews.module.css';
import {Container} from "@/layouts/container";


export const Reviews = () => {
    return(
        <Container>

        </Container>
    )
}

type ReviewProps = {
    text: string,
    rating: number
}

const Review = ({text, rating}:ReviewProps) => {
    return(
        <div className={styles.Card}>
            <div className={styles.Rating}></div>
            <div className={styles.Text}>{text}</div>
        </div>
    )
}

