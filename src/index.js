import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './app/App';

import 'style/main.scss';

const element = document.getElementById('root');
const root = createRoot(element);

root.render(
	<HelmetProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</HelmetProvider>
);
