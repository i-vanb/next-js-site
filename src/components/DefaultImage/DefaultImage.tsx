import styles from "./DefaultImage.module.css";
import Image from "next/image";
import Logo from "@/assets/img/logo.svg";

export const DefaultImg = ({size}:PropsType) => {
    let width = 200;
    let height = 300;

    if(size === 'small') {
        width = 100;
        height = 150;
    } else if(size === 'large') {
        width = 300;
        height = 450;
    }

    return(
        <div className={styles.defaultImage}>
            <Image src={Logo} alt="Logo" width={width} height={height} />
        </div>
    )
}


type PropsType = {
    size?: 'small' | 'medium' | 'large';
}