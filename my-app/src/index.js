import React from 'react';
import {render} from 'react-dom';

import {  Route,  BrowserRouter } from 'react-router-dom';

import App from './components/App'

import ex1 from './components/ex1'
import Dogs from './components/Dogs';
import ListDogs from './components/ListDogs';
import './style.css';
import ImageDogsList from './components/ImageDogsList';



render(
  <BrowserRouter>
        <div>
            <Route path='/' component={App}/>
            <Route path='/list' component={ListDogs}/>
            <Route path = '/special-dog' component={ImageDogsList}/> 
            <Route path='/random-вogs' component={Dogs}/>
            <Route path='/ex' component={ex1}/>

        </div>
  </BrowserRouter>,
  document.getElementById('root')
)