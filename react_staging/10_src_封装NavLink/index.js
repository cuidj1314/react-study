//引入React
import React from 'react';
//引入eactDOM
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
//引入APP
import App from './App'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root"))