import React, { useContext, useEffect, useRef, useState, MouseEvent } from 'react';

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	ChartData,
	ScatterDataPoint,
	Chart,
	ChartTypeRegistry,
	BubbleDataPoint,
} from 'chart.js';

import { getElementAtEvent, Line } from 'react-chartjs-2';

import { getSchoolLessons, getValues, getData } from '../../utils';
import { COLORS, MONTHS } from '../../constants';
import { Context } from '../../context';
import { Sidebar } from '..';
import { SidebarItemType } from '../../types';

export const options = {
	responsive: true,
	plugins: {},
};

import './Graphic.scss';
import { useNavigate } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

export const Graphic = () => {
	const navigate = useNavigate();

	const { filter, getFilteredData, blackListSchools } = useContext(Context);

	const [graphicData, setGraphicData] =
		useState<ChartData<'line', Array<number | ScatterDataPoint | null>, unknown>>();
	const [datasets, setDatasets] = useState<SidebarItemType[]>();

	const graphicRef = useRef();

	useEffect(() => {
		const filteredData = (getFilteredData && getFilteredData()) ?? [];
		const schoolValues = getValues(filteredData, 'school');

		const temp =
			schoolValues.map((s, index) => {
				return {
					label: s as string,
					data: getSchoolLessons(filteredData, s as string),
					borderColor: COLORS[index % COLORS.length],
					backgroundColor: COLORS[index % COLORS.length],
				} as SidebarItemType;
			}) ?? [];

		setDatasets(temp);
		setGraphicData({
			labels: Object.keys(MONTHS),
			datasets: temp.filter(d => !blackListSchools?.includes(d.label)),
		});
	}, [filter, blackListSchools]);

	const onGraphicClick = (event: MouseEvent<HTMLCanvasElement>) => {
		const [{ datasetIndex, index }] = getElementAtEvent(
			graphicRef.current ??
				({} as Chart<
					keyof ChartTypeRegistry,
					(number | ScatterDataPoint | BubbleDataPoint | null)[],
					unknown
				>),
			event,
		);

		const { id } = getData(
			(getFilteredData && getFilteredData()) ?? [],
			(graphicData?.datasets ?? [])[datasetIndex].data[index] as number,
		);
		navigate(`/${id}`);
	};

	return (
		<div className='graphicContainer'>
			<div className='graphic'>
				{graphicData && (
					<Line
						ref={graphicRef}
						options={options}
						data={graphicData}
						onClick={onGraphicClick}
					/>
				)}
			</div>
			<Sidebar items={datasets} />
		</div>
	);
};
