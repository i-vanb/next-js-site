import styles from './Article.module.css';
import {Container} from "@/layouts/container";
import cn from "classnames";
import React from "react";

type ArticleProps = {
    isReverse?: boolean,
    Img: React.FC,
    Description: React.FC
}

export const Article = ({isReverse, Img, Description}:ArticleProps) => {
    return (
        <Container>
            <div className={cn(styles.Wrapper, {[styles.reverse]: isReverse})}>
                <div className={styles.Photo}>
                    <Img />
                </div>
                <div className={styles.Desc}>
                    <Description />
                </div>
            </div>
        </Container>
  )
}