import React from 'react';
import { createRoot } from 'react-dom/client';
import "@src/shared/config/i18n/i18n";
import {App} from "@src/app";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
