'use client';
import Link from "next/link";
import styles from './NavMenu.module.css';
import cn from 'classnames';
import {useState} from "react";

export const NavMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openMenu = () => setIsOpen(true);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <a className={styles.Open_btn} onClick={openMenu}></a>
            <div className={cn(styles.wrapper, {[styles.active]: isOpen})} onClickCapture={closeMenu}>
                <a className={styles.Close_btn} onClick={closeMenu}></a>
                <ul className={styles.NavMenu}>
                    <li>
                        <Link className={styles.Link} href="/"></Link>
                    </li>
                    <li>
                        <Link className={styles.Link} href="/gallery"></Link>
                    </li>
                    <li>
                        <Link className={styles.Link} href="/about"></Link>
                    </li>
                </ul>
            </div>
        </>
    )
}