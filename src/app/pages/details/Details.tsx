import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Context } from '../../context';
import { DataType } from '../../types';

import './Details.scss';

export const Details = () => {
	const { id = '' } = useParams();

	const { findById } = useContext(Context);

	const [foundData, setFoundData] = useState<DataType>();

	useEffect(() => {
		setFoundData(findById && findById(id));
	}, []);

	const getDataDetails = () => {
		return (
			<div className='details'>
				<span>{foundData?.id}</span>
				<span>{foundData?.month}</span>
				<span>{foundData?.country}</span>
				<span>{foundData?.camp}</span>
				<span>{foundData?.school}</span>
				<span>{foundData?.lessons}</span>
			</div>
		);
	};

	return (
		<div className='mainContainer'>
			<h1 className='title'>Analysis chart</h1>
			<div className='detailContainer'>
				<div>
					{foundData ? (
						<>{getDataDetails()}</>
					) : (
						<span className='notFound'> Data Not Found</span>
					)}
				</div>
			</div>
		</div>
	);
};
