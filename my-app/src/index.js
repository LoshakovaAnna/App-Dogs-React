import React from 'react';
import  {render} from 'react-dom';
import { createStore } from 'redux';
import {  Provider } from 'react-redux';
import {  Route,  BrowserRouter } from 'react-router-dom';

import { rootReducer } from './store/reducer';

import App from './components/App';

import PageRandomDogs from './components/PageRandomDogs';
import PageListDogs from './components/PageListDogs';
import PageSpecificDogs from './components/PageSpecificDogs';

import dinamicPageSpecDog from './components/dinamicPageSpecDog';

import './style.css';


export const store = createStore(rootReducer);
console.log(store.getState());

render(<Provider store = {store}>
  <BrowserRouter>
        <div>
            <Route path='/' component={App}/>
            <Route path='/list' component={PageListDogs}/>
            <Route path='/random-dogs' component={PageRandomDogs}/>
            
            <Route path = '/specific-dog-choose' component={PageSpecificDogs}/> 
            <Route path = '/specific-dog/:sm' component={dinamicPageSpecDog}/> 
            
          
        </div>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
