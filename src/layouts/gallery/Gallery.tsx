import {Container} from "@/layouts/container";
import styles from "./Gallery.module.css";
import {Card} from "@/components/Card/Card";
import {Item} from "@/interfaces/item";

export const Gallery = (props:GalleryProps) => {
    const {list} = props;
    return(
        <Container>
            <div className={styles.wrapper}>
                {list.map(item => <Card src={item.avatar} name={item.name} id={item.id} key={item.id} />)}
            </div>
        </Container>
    )
}

interface GalleryProps {
    list: Item[]
}