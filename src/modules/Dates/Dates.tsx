import { CircleButtons } from "../../components/CircleButtons/CircleButtons";
import { CircleDate } from "../../components/CircleDate/CircleDate";
import { SliderInfo } from "../../components/SliderInfo/SliderInfo";
import { Title } from "../../components/Title/Title"
import { useDateInfo } from "../../shared/hooks/useDateInfo";
import { atom, useAtomValue } from "jotai";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NextButtons } from "../../components/NextButtons/NextButtons";

import styles from './Dates.module.scss';
import { useResolution } from "../../shared/hooks/useResolution";

gsap.registerPlugin(useGSAP)

const numberAtom = atom(1);

export const Dates = () => {

	const number = useAtomValue(numberAtom);
	const dateInfo = useDateInfo(number);

	const currentResolution = useResolution()

	return (
		<div className={styles.main}>
			<Title name="Исторические даты" />
			<CircleDate
				numAtom={numberAtom}
				startDate={dateInfo!.startDate}
				endDate={dateInfo!.endDate}
			/>
			{
				(currentResolution === 'all' || currentResolution === 'desktop') ?
					<CircleButtons
						numAtom={numberAtom}
					/>
					: null
			}
			<NextButtons
				numAtom={numberAtom}
			/>
			<SliderInfo
				id={dateInfo!.id}
				arrayInfo={dateInfo!.infoDate}
				numAtom={numberAtom}
			/>
		</div>
	)
}
