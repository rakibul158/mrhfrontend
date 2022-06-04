import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className='Header-Wapper'>
        <div className='Header-Container'>
          <div className='Header-Start'>
            <h3>mrhrakibul</h3>
          </div>
          <div className='Header-Center'>
            <p>Navigation Here</p>
          </div>
          <div className='Header-End'>
            <p>Contact Me</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
