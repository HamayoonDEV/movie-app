import React from 'react'
import './navbar.css'

class Navbar extends React.Component {
    render(){
  return (
    <div className='nav'>
        <div className='search-container'>
            <input/>
            <button className='btn' id='search-btn'>Search</button>
        </div>
    </div>
  )}
}

export default Navbar