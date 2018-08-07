import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {
    render() {
        return (
            <div className="footer">
             <div className="container">
                   <div id="navlist-footer">
                       <ul>
                           <li><h5>HOME|</h5></li>
                           <li><h5>ABOUT|</h5></li>
                           <li><h5>CONTACT|</h5></li>
                           <li><h5>BAG</h5></li>
                       </ul>
                   </div>
            </div>
            </div>
        );
    }
}

export default Footer;