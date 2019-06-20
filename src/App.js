import React from 'react';
import './App.css';


import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { postNotesReducer, userOptReducer } from './reducers/index'
import counterReducer from './reducers/counterReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/header';
import RootRouter from './components/route';

const reducer = combineReducers({
  counterReducer: counterReducer,
  posts: postNotesReducer,
  users: userOptReducer
});



const store = createStore(reducer, composeWithDevTools());
function App() {
  return (
    <div className="container">
      
      <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <RootRouter/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
