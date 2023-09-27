import cn from 'classnames';
import styles from './Container.module.css';
import {ContainerProps} from "./Container.interface";

export const Container = ({children, className}:ContainerProps) => {
    return (
        <div className={cn(styles.Container, className)}>
            {children}
        </div>
    )
}


