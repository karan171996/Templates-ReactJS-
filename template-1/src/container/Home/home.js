import React, { Component } from 'react';
import './home.css';
import logo1 from '../../assets/logo_html.png';
import logo2 from  '../../assets/logo_css.png';
import logo3 from '../../assets/logo_brush.png';
const images={
    logo1,
    logo2,
    logo3
}
class Home extends Component {
    render() {
        return (
            <div>
              <section id="showcase">
                <div className="container">
                   <h1>Affordable Professional Web Design</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis auctor mi, eu lobortis odio sodales non. Nunc euismod id ligula ac laoreet</p>
                </div>
              </section>

              <section id="newsletter">
                  <div className="container">
                    <h1>Subscribe to Our Newsletter </h1>
                    <form>
                        <input type="email" placeholder="Enter your email"/>
                        <button type="submit" class="button_1">Subscribe</button>
                    </form>
                  </div>
              </section>

              <section id="boxes">
               <div className="container">
                 <div className="box">
                    <img src ={images.logo1} alt="logo"/>
                    <h3>HTML5</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis auctor mi, eu lobortis odio sodales non. Nunc euismod id ligula ac laoreet</p>
                 </div>
                 <div className="box">
                    <img src={images.logo2} alt="logo"/>
                     <h3>CSS3</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis auctor mi, eu lobortis odio sodales non. Nunc euismod id ligula ac laoreet</p>
                 </div>
                 <div className="box">
                    <img src ={images.logo3}  alt="logo"/>
                     <h3>Web Design</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis auctor mi, eu lobortis odio sodales non. Nunc euismod id ligula ac laoreet</p>
                 </div>
               </div>
              </section>

              <footer>
                  
                  <p>Acme Web Design, Copyright &copy; 2018</p>
              </footer>
            </div>
        );
    }
}

export default Home;