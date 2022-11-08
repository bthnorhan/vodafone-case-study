import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Details, List } from './pages';

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<List />} />
			<Route path=':id' element={<Details />} />
		</Routes>
	);
};
