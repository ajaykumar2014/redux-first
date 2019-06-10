import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import TextNoteBook from './components/TextNoteBook'
import NoteList from './components/NoteList'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import postNotesReducer from './reducers/index'
import counterReducer from './reducers/counterReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

const reducer = combineReducers({
  counterReducer: counterReducer,
  posts: postNotesReducer
});

const store = createStore(reducer, composeWithDevTools());
function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <div className="row">
          <div className="col">
            <Counter />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TextNoteBook />
          </div>
          <div className="col">
            <NoteList />
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default App;
