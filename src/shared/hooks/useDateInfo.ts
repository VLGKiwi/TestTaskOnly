import dates from '../data/date.json';

export const useDateInfo = (number: number) => {

	const data = dates;

	return data.find((item) => item.id === number);
}
