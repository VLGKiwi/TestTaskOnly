import { CircleButtons } from "../../components/CircleButtons/CircleButtons";
import { CircleDate } from "../../components/CircleDate/CircleDate";
import { SliderInfo } from "../../components/SliderInfo/SliderInfo";
import { Title } from "../../components/Title/Title"
import { useDateInfo } from "../../shared/hooks/useDateInfo";
import { DatesProps } from "./index";
import { atom, useAtomValue } from "jotai";

const numberAtom = atom(1);

export const Dates = ({ }: DatesProps) => {

	const number = useAtomValue(numberAtom);
	const dateInfo = useDateInfo(number);

	return (
		<div>
			<Title name="Исторические даты" />
			<CircleDate numAtom={numberAtom} startDate={dateInfo!.startDate} endDate={dateInfo!.endDate} />
			<CircleButtons numAtom={numberAtom} />
			<SliderInfo id={dateInfo!.id} arrayInfo={dateInfo!.infoDate} />
		</div>
	)
}
