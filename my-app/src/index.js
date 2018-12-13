import React from 'react';
import  {render} from 'react-dom';
import { createStore } from 'redux';
import {  Provider } from 'react-redux';
import {  Route,  BrowserRouter } from 'react-router-dom';

import { rootReducer } from './store/reducer';

import App from './components/App';
import dinamicPageSpecDog from './components/dinamicPageSpecDog';
import PageRandomDogs from './components/PageRandomDogs';
import ListDogs from './components/PageListDogs';
import SpecificDogs from './components/SpecificDogs';

import './style.css';


const store = createStore(rootReducer);
console.log(store.getState());

render(<Provider store = {store}>
  <BrowserRouter>
        <div>
            <Route path='/' component={App}/>
            <Route path='/list' component={ListDogs}/>
            <Route path='/random-dogs' component={PageRandomDogs}/>
            
            <Route path = '/specific-dog' component={SpecificDogs}/> 
            <Route path = '/specific-dog/:sm' component={dinamicPageSpecDog}/> 
            
          
        </div>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
