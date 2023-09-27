'use client'
import styles from './MainSlider.module.css';
import {Container} from "@/layouts/container";
import {Slider} from "@/components/Slider/Slider";
import {useState} from "react";
import {SliderDescription} from "@/components/SliderDescription/SliderDescription";
import {ScrollDownIcon} from "@/components/ScrollDownIcon";

export const MainSlider = ({images}) => {
    const [list, setList] = useState([...images]);
    const [start, setStart] = useState<number | null>(null);
    const [isAnimated, setIsAnimated] = useState(false);

    const bg = list[list.length-1].mainBg;

    const next = () => {
        if(!isAnimated) setIsAnimated(true);

        setList((prev:any) => {
            const lastElement = prev.pop();
            return [lastElement, ...prev];
        });
    }

    const wheelHandler = (e:any) => {
        if(e.deltaY > 0) return next();
    }

    const wheelWrapper = () => {
        let timeout:any = null;
        return (e:any) => {
            if(timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                wheelHandler(e);
            }, 200);
        };
    }

    const touchStartHandler = (e:any) => {
        setStart(e.touches[0].clientX);
    }

    const touchEndHandler = (e:any) => {
        if(!start) return;
        if(start > e.changedTouches[0].clientX+20) next();
        setStart(null);
    }

    return (
        <div onWheel={wheelWrapper()}
             onTouchEnd={touchEndHandler}
             onTouchStart={touchStartHandler}
             className={styles.Section}
             style={{backgroundColor: bg}}
        >
            <Container className={styles.Container}>
                <div className={styles.Wrapper}>
                    <div className={styles.Description_wrapper} id="sliderDescription">
                        <SliderDescription list={list} isAnimated={isAnimated} />
                    </div>
                    <div className={styles.Slider_wrapper}>
                        <Slider list={list} isAnimated={isAnimated} />
                    </div>
                </div>
            </Container>
            {!isAnimated && <ScrollDownIcon />}
        </div>
    )
}

export interface ImagesList {
    transform: string;
    src: string;
    id: number,
    name: string,
    style: any,
    description: string,
    title: string,
    colors?: {
        text: string,
        link: string
    }
}