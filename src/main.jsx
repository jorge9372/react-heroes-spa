import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';
import { MyRoutes } from './router';



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MyRoutes/>
    </React.StrictMode>
);
