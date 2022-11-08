import { MONTHS } from '../constants';
import { DataType, MonthsType } from '../types';

export const sortByMonth = (data: DataType[]) => {
	return data.sort(
		(a, b) => MONTHS[a.month as keyof MonthsType] - MONTHS[b.month as keyof MonthsType],
	);
};
