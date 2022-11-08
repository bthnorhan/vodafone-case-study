import { useContext } from 'react';
import { Context } from '../context';

export const testData = [
	{
		id: '620af3a468e4b2e765e7c9e7',
		month: 'Feb',
		camp: 'Omaka',
		country: 'Egypt',
		school: 'Burke High School',
		lessons: 140,
	},
	{
		id: '620af3a4b8c8ca0afd385a9c',
		month: 'Apr',
		camp: 'Kakuma',
		country: 'Egypt',
		school: 'Kakuma Secondary',
		lessons: 170,
	},
	{
		id: '620af3a4a812c63fb1945ac9',
		month: 'Oct',
		camp: 'Kakuma',
		country: 'Egypt',
		school: 'Kakuma Secondary',
		lessons: 215,
	},
];

export const TestComponent = () => {
	const { data } = useContext(Context);

	return <span>{data?.[0].lessons}</span>;
};
