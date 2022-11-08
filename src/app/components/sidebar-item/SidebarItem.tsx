import React, { useMemo } from 'react';

import { SidebarItemProps } from './SidebarItem.prop';

import './SidebarItem.scss';

export const SidebarItem = ({ item, selected }: SidebarItemProps) => {
	const lessons = useMemo(() => item.data.reduce((p, c) => p + c, 0), [item.data]);

	return (
		<div
			className='sidebarItem'
			data-lesson={item.label}
			style={{
				color: selected ? item.backgroundColor : '#E0E0E0',
			}}
		>
			<div
				className='itemCircle'
				style={{
					border: `1px solid ${selected ? item.backgroundColor : '#E0E0E0'}`,
				}}
			>
				<div
					style={{
						border: `1px solid ${selected ? item.backgroundColor : '#E0E0E0'}`,
						backgroundColor: selected ? item.backgroundColor : 'transparent',
					}}
				></div>
			</div>
			<div className='itemInformation'>
				<span>
					<strong>{lessons}</strong> lessons
				</span>
				<span className='subItemInformation'>in {item.label}</span>
			</div>
		</div>
	);
};
