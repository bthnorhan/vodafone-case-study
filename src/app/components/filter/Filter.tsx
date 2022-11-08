import React, { MouseEvent, useState, useContext, useEffect, ChangeEvent } from 'react';
import { Context } from '../../context';

import { FilterProps } from './Filter.props';

import './Filter.scss';

export const Filter = ({
	data = [],
	canSelectAll = false,
	placeholder = '',
	filterKey = '',
}: FilterProps) => {
	const { updateFilter, filter } = useContext(Context);
	const [selectedOption, setSelectedOption] = useState(canSelectAll ? 'all' : data[0]);

	useEffect(() => {
		updateFilter &&
			updateFilter({
				[filterKey]: filter?.[filterKey] ?? selectedOption,
			});
	}, []);

	useEffect(() => {
		setSelectedOption(p => filter?.[filterKey] ?? p);
	}, [filter, filterKey]);

	const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedOption(event.target.value);
		updateFilter &&
			updateFilter({
				[filterKey]: event.target.value,
			});
	};

	return (
		<div className='filterContainer'>
			<span>{placeholder}</span>
			<select value={selectedOption} onChange={onChange}>
				{canSelectAll && (
					<option key='all' value='all'>
						Show all
					</option>
				)}
				{data.map(filter => (
					<option key={filter} value={filter}>
						{filter}
					</option>
				))}
			</select>
		</div>
	);
};
