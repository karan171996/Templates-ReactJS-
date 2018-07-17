import React, { Component } from 'react';
import './services.css';
class Services extends Component {
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
                     <h1 id="page-title">Services</h1>
                     <ul id="services">
                     <li>
                        <h3>Web Design</h3>
                        <p>Aenean pellentesque ex id porttitor faucibus.Donec eget viverra orci.Integer nisl est, cursus eu augue sed, aliquet eleifend tellus.Suspendisse a euismod orci, ac lobortis velit.Donec tristique commodo augue vel tempus.</p>  
                        <p>Pricing: $1000 - $3000 </p>
                     </li>
                     <li>
                        <h3>Website Maintenance</h3>
                        <p>Aenean pellentesque ex id porttitor faucibus.Donec eget viverra orci.Integer nisl est, cursus eu augue sed, aliquet eleifend tellus.Suspendisse a euismod orci, ac lobortis velit.Donec tristique commodo augue vel tempus.</p>  
                        <p>Pricing: $250 per month  </p>
                     </li>
                     <li>
                        <h3>Website Hosting</h3>
                        <p>Aenean pellentesque ex id porttitor faucibus.Donec eget viverra orci.Integer nisl est, cursus eu augue sed, aliquet eleifend tellus.Suspendisse a euismod orci, ac lobortis velit.Donec tristique commodo augue vel tempus.</p>  
                        <p>Pricing: $25 per month </p>
                     </li>
                     </ul>
                </article>
                  <aside id="sidebar">
                  <div className="dark">
                     <h3>Get A Quote</h3>
                     <form className="quote">
                        <div>
                            <label>Name</label><br/>
                            <input input="text" placeholder="Name"/>
                        </div>
                        <div>
                            <label>Email</label><br/>
                            <input type="email" placeholder="Email"/>
                        </div>
                        <div>
                            <label>Message:</label><br/>
                            <textarea placeholder="Message"></textarea>
                        </div>
                            <button className="button_1" type="submit">Send</button>
                        
                     </form>
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

export default Services;