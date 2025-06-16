import styles from './Title.module.scss';
import { TitleProps } from './index';

export const Title = ({ name }: TitleProps) => {
    return (
        <h1 className={styles.title}>
          {name}
        </h1>
    )
}


// Pt sans 700 400 Bebas Neue 400
