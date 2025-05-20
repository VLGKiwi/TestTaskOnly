import { CircleButtonsProps } from "./index";
import { useSetAtom } from 'jotai';

export const CircleButtons = ({ numAtom }: CircleButtonsProps) => {

	const setNumber = useSetAtom(numAtom);

	const handleClick = (num: number) => {
		setNumber(num);
	}

	return (
		<div>
			{
				Array.from({ length: 6 }, (_, i) => (
					<button key={i} onClick={() => handleClick(i + 1)}>{i + 1}</button>
				))
			}
		</div>
	)
}
