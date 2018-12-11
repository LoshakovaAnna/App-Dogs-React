
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1 >Dogs Images</h1>      
        <ul className="main-menu">
            
          <li className = "menu-link"><Link to='/random-dogs'>Random Dogs</Link></li>
          <li className = "menu-link"><Link to='/list'>List</Link></li>
          <li className = "menu-link"><Link to='/specific-dog'>Specific Dog</Link></li>           
          
        </ul>
        {/* добавили вывод потомков
        {this.props.children} */}
      </div>
    )
  }
}

export default App;