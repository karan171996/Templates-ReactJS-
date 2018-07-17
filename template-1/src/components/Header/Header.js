import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';
class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                   <div id="branding">
                      <h1><span className="highlight">Acme</span> Web Design</h1>
                   </div>
                <nav>
                    <ul>
                        <li><NavLink to = '/' activeStyle={{
                            color: '#e8491d',
                            fontWeight:'bold'
                        }} exact> Home </NavLink></li>
                       
                        <li><NavLink to = '/About' activeStyle={{
                            color: '#e8491d',
                            fontWeight: 'bold'
                        }} exact> About </NavLink></li>
                        
                        <li><NavLink to = '/Services' activeStyle={{
                            color: '#e8491d',
                            fontWeight: 'bold'
                        }} exact> Services </NavLink></li>
                    </ul>
                </nav>
                </div>
            </header>
        );
    }
}

export default Header;