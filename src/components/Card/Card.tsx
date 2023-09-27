'use client';
import styles from "./Card.module.css";

import {Pacifico} from 'next/font/google';
import cn from "classnames";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import {useEffect, useState} from "react";
import {API} from "@/API";
import Image from "next/image";

import {DefaultImg} from "@/components/DefaultImage/DefaultImage";

const pacifico = Pacifico({weight: '400', subsets: ['latin']});

export const Card = ({name, src, id}:CardProps) => {
    const [img, setImg] = useState<any>('');
    const path = usePathname();
    const url = path + '/' + id;

    useEffect(() => {
        API.product.getImage({id, image:src, width: 250}).then(res => setImg(URL.createObjectURL(res)));
    }, []);

    return (
        <Link className={styles.link} href={url}>
            <div className={styles.wrapper}>
                <div className={styles.image}>
                    {img
                        ? <img src={img} alt={name} />  //<Image src={img} alt={name} width={250} height={300} />  //<img src={img} alt={name} />
                        : <DefaultImg size="small" />
                    }
                </div>
                <div className={cn(styles.title, pacifico.className)}>{name}</div>
            </div>
        </Link>
    )
}

interface CardProps {
    name: string,
    src: string,
    id: string
}