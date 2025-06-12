import styles from './NextButtons.module.scss';
import { NextButtonsProps } from "./index";
import { useAtom } from "jotai";

export const NextButtons = ({ numAtom }: NextButtonsProps) => {
	const [num, setNum] = useAtom(numAtom);

	const clickButton = (num: number) => {
		if (num < 1) return;
		if (num > 6) return;
		setNum(num);
	}

	return (
		<div className={styles.container}>
			<div className={styles.date}>
				<p>{'0' + num + '/06'}</p>
			</div>
			<div className={styles.buttons}>
				<button className={`${num === 1 ? styles.disabled : ''} ${styles.button}`} onClick={() => clickButton(num - 1)}></button>
				<button className={`${num === 6 ? styles.disabled : ''} ${styles.button}`} onClick={() => clickButton(num + 1)}></button>
			</div>
		</div>
	)
}
