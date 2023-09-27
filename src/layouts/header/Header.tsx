'use client';
import styles from './Header.module.css'
import {Container} from "@/layouts/container";
import {Logo} from "@/components/logo/Logo";
import {NavMenu} from "@/components/navMenu/NavMenu";
import {useState, useEffect} from "react";
import cn from "classnames";

export const Header = () => {
   const [isSticky, setIsSticky] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <header className={cn(styles.Header, {[styles.sticky]: isSticky})}>
            <Container className={styles.Wrapper}>
                <Logo />
                <NavMenu />
            </Container>
        </header>
    )
}