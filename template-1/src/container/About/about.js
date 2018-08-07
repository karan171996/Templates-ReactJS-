import React, { Component } from 'react';
import './about.css';
class About extends Component {
    render() {
        return (
            <div>
                

              <section id="newsletter">
                  <div className="container">
                    <h1>Subscribe to Our Newsletter </h1>
                    <form>
                        <input type="email" placeholder="Enter your email"/>
                        <button type="submit" class="button_1">Subscribe</button>
                    </form>
                  </div>
              </section>

              <section id="main">
               <div className="container">
                <article id="main-col">
                     <h1 id="page-title">About Us</h1>
                     <p>
                         Aenean pellentesque ex id porttitor faucibus.Donec eget viverra orci, ut porttitor turpis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Aenean pellentesque ex id porttitor faucibus.Donec eget viverra orci.Integer nisl est, cursus eu augue sed, aliquet eleifend tellus.Suspendisse a euismod orci, ac lobortis velit.Donec tristique commodo augue vel tempus.
                     </p>
                     <p>
                         Integer nisl est, cursus eu augue sed, aliquet eleifend tellus.Suspendisse a euismod orci, ac lobortis velit.Donec tristique commodo augue vel tempus.
                     Aenean pellentesque ex id porttitor faucibus.Donec eget viverra orci.Integer nisl est, cursus eu augue sed, aliquet eleifend tellus.Suspendisse a euismod orci, ac lobortis velit.Donec tristique commodo augue vel tempus.
                     </p>
                </article>
                  <aside id="sidebar">
                  <div className="dark">
                     <h3>What We Do</h3>
                     <p>Aenean pellentesque ex id porttitor faucibus.Donec eget viverra orci.Integer nisl est, cursus eu augue sed, aliquet eleifend tellus.Suspendisse a euismod orci, ac lobortis velit.Donec tristique commodo augue vel tempus.</p>
                  </div>
                  </aside>
               </div>
              </section>

              <footer>
                  
                  <p>Acme Web Design, Copyright &copy; 2018</p>
              </footer>
            </div>
        );
    }
}

export default About;