import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
    render() {
        return (
            <div className="parent">
                <div className="container">
                 <div id="branding">
                      <h5>MY AWESOME SHOP</h5>
                   </div>
                   <div id="navlist-header">
                       <ul>
                           <li><h5>HOME</h5></li>
                           <li><h5>ABOUT</h5></li>
                           <li><h5>CONTACT</h5></li>
                           <li><h5>BAG</h5></li>
                       </ul>
                   </div>
                   <div style={{clear:'both'}}></div>
                 </div>
 
            </div>
        );
    }
}

export default Header;