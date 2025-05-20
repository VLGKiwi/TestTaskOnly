import styles from './CircleDate.module.scss';
import { CircleDateProps } from './index';

export const CircleDate = ({ numAtom, startDate, endDate }: CircleDateProps) => {


	return (
		<div>
			{startDate}
			{endDate}
		</div>
	)
}
