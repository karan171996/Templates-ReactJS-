import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                   <div id="branding">
                      <h1>Acme Web Design</h1>
                   </div>
                </div>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/About'>About</Link></li>
                        <li><Link to='/Services'>Services</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;