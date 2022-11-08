import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import './styles/index.scss';

import { App } from './app/App';
import { ContextProvider } from './app/context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<ContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ContextProvider>
	</React.StrictMode>,
);

reportWebVitals();
