import { RouterProvider } from 'react-router-dom';
import React from 'react';

import { router } from './utils/navigation/routes';

const App: React.FC = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
