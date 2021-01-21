import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import {store} from './config/store'
import Routes from './config/router'

function App() {
  return (
    <Provider store={store}>
    <Routes></Routes>
    </Provider>
  );
}

export default App;
