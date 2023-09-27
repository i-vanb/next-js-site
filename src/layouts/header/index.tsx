'use client';
import styles from './Header.module.css'
import {Container} from "@/layouts/container";
import {Logo} from "@/components/logo/Logo";
import {NavMenu} from "@/components/navMenu/NavMenu";
import {useState, useEffect} from "react";
import cn from "classnames";
import { usePathname } from 'next/navigation';

export const Header = () => {
   const [isSticky, setIsSticky] = useState(false);
    const pathname = usePathname();


    useEffect(() => {
        const handleScroll = () => {
            if(pathname === "/") return;
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
    }, [pathname]);


    return (
        <header className={cn(styles.Header, {[styles.sticky]: isSticky})}>
            <Container className={styles.Wrapper}>
                <Logo />
                <NavMenu />
            </Container>
        </header>
    )
}