import React from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter as Router } from 'react-router-dom';
import {ChainId , ThirdwebProvider} from '@thirdweb-dev/react';
import { StateContextProvider } from './context/CreateContext'
import './index.css'
import App from "./App";


const root = createRoot(document.getElementById('root'))

root.render(
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
        <Router>
        <StateContextProvider>
         <App />
         </StateContextProvider>
        </Router>
    </ThirdwebProvider>
)

