import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
// step 0 - require stuff from redux, react-redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'; 
// step 1 - declare reducers
const testReducer = ( state='hello world', action ) =>{
    console.log( 'in testReducer:', action );
    return state;
} // end reducer (it is just a function)
// step 2 - create store & combine reducers
const store = createStore(
    combineReducers({
        testReducer
    })
) // end create store
// step 3 - use provider to allow app to use store
ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));
