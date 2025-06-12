import { useGSAP } from '@gsap/react';
import styles from './CircleDate.module.scss';
import { CircleDateProps } from './index';
import gsap from 'gsap';
import { useRef } from 'react';
import { useAtomValue } from 'jotai';

export const CircleDate = ({ numAtom, startDate, endDate }: CircleDateProps) => {
	const startRef = useRef<HTMLDivElement>(null);
	const endRef = useRef<HTMLDivElement>(null);
	const prevStartDate = useRef(startDate);
	const prevEndDate = useRef(endDate);

	const currentAtomValue = useAtomValue(numAtom);

	useGSAP(() => {

		if (startDate !== prevStartDate.current || endDate !== prevEndDate.current) {

			if (startRef.current) {
				const startNum = parseInt(prevStartDate.current);
				const targetStartNum = parseInt(startDate);

				let currentValue = startNum;

				gsap.to({}, {
					onUpdate: function () {
						const progress = this.progress();
						const newValue = Math.floor(startNum + (targetStartNum - startNum) * progress);

						if (newValue !== currentValue) {
							currentValue = newValue;
							startRef.current!.textContent = currentValue.toString();
						}
					}
				});
			}

			if (endRef.current) {
				const endNum = parseInt(prevEndDate.current);
				const targetEndNum = parseInt(endDate);

				let currentValue = endNum;

				gsap.to({}, {
					onUpdate: function () {
						const progress = this.progress();
						const newValue = Math.floor(endNum + (targetEndNum - endNum) * progress);

						if (newValue !== currentValue) {
							currentValue = newValue;
							endRef.current!.textContent = currentValue.toString();
						}
					}
				});
			}

			prevStartDate.current = startDate;
			prevEndDate.current = endDate;
		}
	}, [startDate, endDate, currentAtomValue]);

	return (
		<div className={styles.title}>
			<div ref={startRef} className={styles.title__start}>{startDate}</div>
			<div ref={endRef} className={styles.title__end}>{endDate}</div>
		</div>
	)
}
