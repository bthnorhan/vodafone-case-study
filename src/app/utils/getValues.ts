import { DataType } from '../types';

export const getValues = (data: DataType[], searchedKey: string): (string | number)[] => {
	return data.reduce(
		(found, next) =>
			found.includes(next[searchedKey as keyof DataType] || '')
				? found
				: found.concat(next[searchedKey as keyof DataType] || ''),
		[] as (string | number)[],
	);
};
