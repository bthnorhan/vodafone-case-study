import React, { useContext } from 'react';

import { Filter, Graphic } from '../../components';
import { FILTERS } from '../../constants';
import { getValues } from '../../utils';
import { FilterType } from '../../types';
import { Context } from '../../context';

import './List.scss';

export const List = () => {
	const { data = [] } = useContext(Context);

	const renderFilters = ({ key, canSelectAll, placeholder }: FilterType) => {
		return (
			<Filter
				data={getValues(data, key)}
				key={key}
				canSelectAll={canSelectAll}
				placeholder={placeholder}
				filterKey={key}
			/>
		);
	};

	return (
		<div className='mainContainer'>
			<h1 className='title'>Analysis chart</h1>
			<h4 className='subTitle'>Number of lessons</h4>
			<div className='filtersContainer'>{FILTERS.map(renderFilters)}</div>
			<Graphic />
		</div>
	);
};
