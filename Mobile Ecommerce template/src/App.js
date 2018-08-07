import React from 'react';
import './App.css';
import history from './history';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Loader from './Loader';

class App extends React.Component {
  constructor() {
    super();
    this.state ={
      models:[],
      resultData: [],
      responseError: false,
      loadMore : true
    };
    this.currentPage = 1;
    this.clickedItem = this.clickedItem.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }
  clickedItem(id, e) {
    e.preventDefault();
    var url = `/details/${id}`
    history.push(url);
    window.location.href = window.location.href;
  }

  loadMore() {
    this.currentPage = this.currentPage + 1;
    this.callAPI()
  }

  callAPI() {
        this.setState({ isLoading: true });
        fetch(`https://assignment-appstreet.herokuapp.com/api/v1/products?page=${this.currentPage}`)
          .then(response => {
            console.log(response);
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Something went wrong ...');
            }
          })
          .then(data => {
              this.setState({
                resultData: this.state.resultData.concat(data.products),
              });
              if (data.products.length === 0) {
                this.setState({
                  loadMore: false
                })
              }

          })
          .catch(error => this.setState({responseError : true }));
  }

  componentDidMount(){
    this.callAPI(this.currentPage)
  }

  render() {
   var {resultData} = this.state;
    return (
      <div>
        {
          resultData.length === 0 && <Loader/>
        }
        {
          resultData.length !== 0 &&
        <div>
          <Header/>
          <div className="container page-first">
            <div className="list-models"> { 
                resultData.map((item,index)=> {
                  return (          
                    <div key = {index} className = "detail" onClick ={(e)=>this.clickedItem(item._id,e)}>
                      <img src={item.images[0]} alt="mobile-pic" />
                      <p className="model-name">{item.name}</p>
                      <p className="model-price">&#8377;{item.mark_price}</p>
                      </div>
                  )
                }
                )
            }
            </div> 
            { this.state.loadMore && <button className="load-more" onClick={this.loadMore} type="button" >Load more</button>}
          </div>
          <Footer/>
        </div>
        }
      </div>
    );
  }
}

export default App