import Image from 'next/image';
import LogoIcon from '@/assets/img/logo.svg';
import styles from './Logo.module.css';
import Link from "next/link";

export const Logo = () => {
    return (
        <Link className={styles.Link} href="/">
            <div className={styles.Logo}>
                <Image
                    src={LogoIcon}
                    width={40}
                    height={40}
                    alt="Logo"
                />
                <label className={styles.Label}></label>
            </div>
        </Link>
    )
}