
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>App</h1>      
        <ul>
            
          <li><Link to='/random-dogs'>Random Dogs</Link></li>
          <li><Link to='/list'>List</Link></li>
          <li><Link to='/specific-dog'>Specific Dog</Link></li>           
          
        </ul>
        {/* добавили вывод потомков
        {this.props.children} */}
      </div>
    )
  }
}

export default App;