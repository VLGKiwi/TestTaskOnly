import { PrimitiveAtom } from "jotai";

export interface SliderInfoProps {
    id: number;
    arrayInfo: {
        id: number;
        title: string;
        description: string;
    }[];
    numAtom: PrimitiveAtom<number>;
}
