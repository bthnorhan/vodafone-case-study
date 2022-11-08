import { createContext, useEffect, useState } from 'react';

import { ContextType, DataType, ContextFilterType } from '../types';
import { MockData } from '../assets';
import { getSchoolLessons, getValues, sortByMonth } from '../utils';

import { ContextProps } from './Context.props';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const Context = createContext<ContextType>({});

export const ContextProvider = ({ children }: ContextProps) => {
	const [data] = useState<DataType[]>(MockData);
	const [filter, setFilter] = useState<ContextFilterType>({});
	const [blackListSchools, setBlackListSchools] = useState<Array<string>>([]);

	const filterLocalStorage = useLocalStorage('filter', '{}');
	const blackListSchoolsLocalStorage = useLocalStorage('blackListSchools', '[]');

	useEffect(() => {
		setFilter(JSON.parse(filterLocalStorage.value));
		setBlackListSchools(JSON.parse(blackListSchoolsLocalStorage.value));
	}, []);

	const updateFilter = (filter: ContextFilterType) => {
		setFilter(p => {
			filterLocalStorage.setValue(JSON.stringify({ ...p, ...filter }));
			return { ...p, ...filter };
		});
	};

	const toggleBlackList = (school: string) => {
		if (blackListSchools.includes(school)) {
			setBlackListSchools(bls => {
				blackListSchoolsLocalStorage.setValue(
					JSON.stringify(bls.filter(s => s !== school)),
				);
				return bls.filter(s => s !== school);
			});
		} else {
			setBlackListSchools(bls => {
				blackListSchoolsLocalStorage.setValue(JSON.stringify([...bls, school]));
				return [...bls, school];
			});
		}
	};

	const getFilteredData = () => {
		let filteredData = [...data];

		if (Object.keys(filter).length > 0) {
			for (const [key, value] of Object.entries(filter)) {
				if (value === 'all') {
					continue;
				}
				filteredData = filteredData.filter(f => f[key as keyof DataType] === value);
			}
		}

		return sortByMonth(filteredData);
	};

	const getTotalLessons = () => {
		const filteredData = getFilteredData();
		const schoolValues = getValues(filteredData, 'school');
		const totalLessons = schoolValues
			.map(s => getSchoolLessons(filteredData, s as string).reduce((p, c) => p + c, 0))
			.reduce((p, c) => p + c, 0);
		return totalLessons ?? 0;
	};

	const findById = (id: string) => {
		const found = data.filter(d => d.id === id);
		return found.length > 0 ? found[0] : undefined;
	};

	return (
		<Context.Provider
			value={{
				data,
				filter,
				updateFilter,
				blackListSchools,
				toggleBlackList,
				getFilteredData,
				getTotalLessons,
				findById,
			}}
		>
			{children}
		</Context.Provider>
	);
};
