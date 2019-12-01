import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import Scheme from './components/Scheme';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

ReactDOM.render(<AppRouter/>, document.getElementById('app'));
