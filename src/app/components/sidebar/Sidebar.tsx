import React, { useContext } from 'react';

import { Context } from '../../context';
import { SidebarItem } from '..';

import { SidebarProps } from './Sidebar.prop';

import './Sidebar.scss';

export const Sidebar = ({ items }: SidebarProps) => {
	const { getTotalLessons, filter, blackListSchools, toggleBlackList } = useContext(Context);
	return (
		<div className='sidebar'>
			<div className='information'>
				<span className='informationTitle'>
					<strong>{getTotalLessons && getTotalLessons()}</strong> lessons
				</span>
				<span className='informationSubTitle'>in {filter?.['camp']}</span>
			</div>
			<div
				onClick={e => {
					toggleBlackList &&
						toggleBlackList(
							(e.target as HTMLDivElement).getAttribute('data-lesson') ?? '',
						);
				}}
				className='sidebarItemContainer'
			>
				{items?.map(i => (
					<SidebarItem
						key={i.label}
						item={i}
						selected={!blackListSchools?.includes(i.label)}
					/>
				))}
			</div>
		</div>
	);
};
