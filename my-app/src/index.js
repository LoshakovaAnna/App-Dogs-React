import React from 'react';
import {render} from 'react-dom';

import {  Route,  BrowserRouter } from 'react-router-dom';

import App from './components/App'

import ex1 from './components/ex1'
import Dogs from './components/Dogs';
import ListDogs from './components/ListDogs';
import './style.css';
import SpecificDogs from './components/SpecificDogs';



render(
  <BrowserRouter>
        <div>
            <Route path='/' component={App}/>
            <Route path='/list' component={ListDogs}/>
            <Route path='/random-dogs' component={Dogs}/>
            
            <Route path = '/specific-dog' component={SpecificDogs}/> 
            <Route path = '/specific-dog/:sm' component={ex1}/> 
            
          
        </div>
  </BrowserRouter>,
  document.getElementById('root')
)