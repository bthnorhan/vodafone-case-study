import { DataType } from '../types';

export const getData = (data: DataType[], value: number): DataType => {
	return data.filter(d => d.lessons === value)[0];
};
