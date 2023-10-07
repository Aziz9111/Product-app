import { getElementError } from '@testing-library/react';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheet.css'; 
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware} from 'redux';
import rootReducer from './redux/reducer';
import { Provider } from 'react-redux';
import App from './Components/App';
import thunk from 'redux-thunk';
import { database } from './database/config';

const store =createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

//const tasks = ['Task1', 'Task2', 'Task3', 'Task4']

/*const element = React.createElement('ol', null, 
tasks.map((tasks)=> React.createElement('li', {key: tasks}, tasks)));*/

/*const element = <div>
                  <h1>Task List</h1>
                  <ol>
                    {tasks.map((tasks, index)=> <li key= {index}>tasks</li>)}
                  </ol>
                </div>*/

ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById("root"));