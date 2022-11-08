import { FilterType } from '../types';

export const FILTERS: FilterType[] = [
	{
		key: 'country',
		placeholder: 'Select Country',
	},
	{
		key: 'camp',
		placeholder: 'Select Camp',
	},
	{
		key: 'school',
		placeholder: 'Select School',
		canSelectAll: true,
	},
];
