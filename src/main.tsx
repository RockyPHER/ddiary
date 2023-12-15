import React from "react";
import App from "./App";
import './samples/node-api'
import { createRoot } from 'react-dom/client';

const root = createRoot(document.body);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)