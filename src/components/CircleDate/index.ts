import { PrimitiveAtom } from 'jotai';

export interface CircleDateProps {
	startDate: string;
	endDate: string;
	numAtom: PrimitiveAtom<number>;
}
