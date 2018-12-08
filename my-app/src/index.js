import React from 'react';
import {render} from 'react-dom';
import Dogs from './components/Dogs';

import ListDogs from './components/ListDogs';
import './style.css';


render(<Dogs />, document.getElementById('root'));
render(<ListDogs />, document.getElementById('all'));