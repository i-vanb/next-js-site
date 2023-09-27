'use client';
import cn from 'classnames';
import styles from "./SliderDesccription.module.css";
import {ImagesList} from "@/layouts/mainSlider";
import Link from "next/link";
import {ItemBuyNow} from "@/components/BuyNowLink";

export const SliderDescription = ({isAnimated, list}:SliderDescriptionProps) => {
    return (
        <>
            {/*<DescCard product={list[list.length-1]} isAnimated={isAnimated} />*/}
            {list.map((item, index)=> <DescCard key={item.id} item={item} isAnimated={isAnimated} /> )}
        </>
    )
}


const DescCard = ({item, isAnimated}:DescCardProps) => {
    const textStyle = {color:item.colors?.text}
    const linkStyle = {color:item.colors?.link}

    return(
        <div className={cn(styles.Description, {[styles.animated]: isAnimated})}>
            <h3 style={textStyle}>{item.title}</h3>
            <p style={textStyle}>{item.description}</p>
            <div className={styles.Links}>
                {/*<Link href="/gallery" className={styles.Link} style={linkStyle}>Details</Link>*/}
                <ItemBuyNow />
                <Link href="/gallery" className={styles.Link} style={linkStyle}>See All Teddy Bears</Link>
            </div>
        </div>
    )
}

interface SliderDescriptionProps {
    isAnimated: boolean,
    list: Array<ImagesList>
}


interface DescCardProps {
    item: ImagesList,
    isAnimated: boolean
}