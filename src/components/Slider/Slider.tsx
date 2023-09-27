'use client';
import cn from 'classnames';
import styles from "./Slider.module.css";
import {ImagesList} from "@/layouts/mainSlider";
import Image from 'next/image';
import {Pacifico} from 'next/font/google';


const pacifico = Pacifico({weight: '400', subsets: ['latin']});

import ParisBear from "@/assets/mainSlider/Untitled-1@2x.jpg";
import {useEffect, useState} from "react";
// import ParisBear from "@/assets/mainSlider/parisBear2.jpg";


export const Slider = ({list, isAnimated}:SliderProps) => {
    const [width, setWidth] = useState(400);
    const [height, setHeight] = useState(800);

    useEffect(() => {
        let w = 400;
        let h = 800;
        if(typeof window !== "undefined") {
            w = Math.max(window.innerWidth/2, 400);
            h = Math.max(window.innerHeight, 800);
        }
        setWidth(w);
        setHeight(h);
    }, []);

    if(!width) return null;

    return(
        <div className={styles.Slider} id="sliderDemoPhoto">
            {list.map((item, index) => <Card item={item} key={item.id} name={item.name} src={item.src} isAnimated={isAnimated} width={width} height={height} />)}
        </div>
    )
}

const Card = ({item, isAnimated, name, src, width, height}:CardProps) => {
    return (
        <a key={item.id} className={cn(styles.Slider_item, {[styles.animated]: isAnimated})}>
            <Image
                loading={'lazy'}
                quality={100}
                className={styles.Slider_item_img}
                src={src}
                width={width}
                height={height}
                alt="Bear"
            />
        </a>
    )
}

interface CardProps {
    item: ImagesList,
    isAnimated: boolean,
    name: string,
    src: string,
    width? : number,
    height? : number
}


interface SliderProps {
    list: Array<ImagesList>
    isAnimated: boolean
}