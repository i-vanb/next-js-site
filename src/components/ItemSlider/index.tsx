'use client';
import styles from './ItemSlider.module.css';
import {useEffect, useRef, useState, UIEvent} from "react";
import Image from "next/image";
import {API} from "@/API";
import cn from "classnames";


function onScrollHandler(length:number, setCurrent: (index:number) => void) {
    let timeout:any = null;
    return (e:UIEvent<HTMLElement>) => {
        if(timeout) clearTimeout(timeout);

        timeout = setTimeout(() => {
            const target = e.target as HTMLElement;
            const itemWidth = target.scrollWidth / length;
            const index = Math.trunc(target.scrollLeft / itemWidth);
            setCurrent(index);
        }, 200);
    }
}


export const ItemSlider = ({id, images, thumbnails}:ItemSliderProps) => {
    const [current, setCurrent] = useState<number>(0);
    const imagesRef = useRef<HTMLDivElement>(null);
    const thumbnailsRef = useRef<HTMLDivElement>(null);


    const nextImage = () => scrollTo(current + 1);

    const prevImage = () => scrollTo(current - 1);

    const scrollTo = (index:number) => {
        if(index < 0 || index > images.length - 1) return;
        if(!imagesRef?.current) return;
        imagesRef.current.scrollLeft = imagesRef.current.scrollWidth / images.length * index;
    }

    return(
        <div className={styles.wrapper}>
            <div onScroll={onScrollHandler(images.length, setCurrent)} ref={imagesRef} className={styles.images}>
                {images.map((src, index) => <ImageItem id={id} key={src} src={src} index={index} isActive={index === current} />)}
            </div>
            <div className={cn(styles.arrow, styles.left)} onClick={prevImage}>
                <svg fill="#000" version="1.1" xmlns="http://www.w3.org/2000/svg" width="768" height="768" viewBox="0 0 768 768">
                    <path d="M493.5 531l-45 45-192-192 192-192 45 45-147 147z" ></path>
                </svg>
            </div>
            <div className={cn(styles.arrow, styles.right)} onClick={nextImage}>
                <svg fill="#000" version="1.1" xmlns="http://www.w3.org/2000/svg" width="768" height="768" viewBox="0 0 768 768">
                    <path d="M274.5 531l147-147-147-147 45-45 192 192-192 192z"></path>
                </svg>
            </div>
            <div className={styles.dots}>
                {images.map((src, index) => <div key={src} className={cn(styles.dot, {[styles.active]: index === current})} />)}
            </div>
            {/*<div ref={thumbnailsRef} className={styles.thumbnails} >*/}
            {/*    {thumbnails.map((src, index) => <ThumbnailItem id={id} key={src} src={src} index={index} isActive={index === current} clickHandler={()=>scrollTo(index)} />)}*/}
            {/*</div>*/}
        </div>
    )
}


const ImageItem = ({id, src, isActive, index}:ImageItemProps) => {
    const elementRef = useRef(null);
    const [img, setImg] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting && !img) {
                        API.product.getImage({id, image:src, width: 500}).then(res => setImg(URL.createObjectURL(res)));
                    }
                    // if (entry.isIntersecting) {
                        // setIsVisible(true);
                        // onVisible(index);
                    // } else {
                        // setIsVisible(false);
                        // onVisible(false);
                    // }
                });
            },
            { threshold: 0.1 } // Adjust the threshold to meet your visibility criteria
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);


    return(
        <div ref={elementRef} className={styles.image}>
            {!img
                ? <div>{src}</div>
                : <Image src={img} alt={id} width={300} height={500} />
            }
            {/*<Image src={} alt={}*/}
        </div>
    )
}


const ThumbnailItem = ({src, isActive, index, id, clickHandler}:ImageItemProps & {clickHandler:()=>void}) => {
    const [img, setImg] = useState<string | null>(null);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        API.product.getImageThumbnail({id, image:src}).then(res => setImg(URL.createObjectURL(res)));
    }, [])

    useEffect(() => {
        if(isActive && ref.current) ref.current.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    }, [isActive])

    return(
        <div ref={ref} className={cn(styles.thumbnail, {[styles.active]:isActive})} onClick={clickHandler}>
            {img && <Image src={img} alt={id} width={75} height={120} />}
        </div>
    )
}

interface ItemSliderProps {
    id: string,
    images: Array<string>,
    thumbnails: Array<string>,
}


interface ImageItemProps {
    id: string,
    src: string,
    isActive: boolean,
    index: number,
}