import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';
import { MyRoutes } from './router';
import { AuthProvider } from './auth';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <MyRoutes />
        </AuthProvider>
    </React.StrictMode>
);
