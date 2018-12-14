import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1 >Dogs Images</h1>      
        <ul className="main-menu">
          <li className = "menu-link"><Link className="link-btn"   to='/random-dogs'>Random Dogs</Link></li>
          <li className = "menu-link"><Link className="link-btn" to='/list'>List Breed</Link></li>
          <li className = "menu-link"><Link className="link-btn"  to='/specific-dog-choose'>Specific Dog</Link></li>                     
        </ul>
      </div>
    )
  }
}

export default App;