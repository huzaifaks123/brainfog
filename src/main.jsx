import React from 'react';
import { createRoot } from 'react-dom/client'; // Use the new createRoot import
import 'tailwindcss/tailwind.css'; // TailwindCSS
import App from './App'; // Import your main App component
import './index.css'; // Import your global CSS styles
const container = document.getElementById('root'); // Get the root container element
const root = createRoot(container); // Create the root for React 18

root.render( // Render using the new API
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
