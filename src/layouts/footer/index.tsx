'use client';
import styles from './Footer.module.css';
import {Container} from "@/layouts/container";
import {Logo} from "@/components/logo/Logo";

export const Footer = () => {

    return (
        <footer className={styles.Footer}>
            <Container className={styles.container}>
                <div className={styles.wrapper}>
                    <Logo />
                    <div className={styles.Links}></div>
                </div>
            </Container>
        </footer>
    )
}

type SocialLinkProps = {
    url: string,
    icon: any,
    title?: string
}

const SocialLink = ({url, icon, title}:SocialLinkProps) => {
    return(
        <a title={title} href={url} target="_blank" className={styles.Link}>
            {icon}
        </a>
    )
}