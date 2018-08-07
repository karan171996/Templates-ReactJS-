import React from 'react';
import './DetailScreen.css';
import Slider from "react-slick";
import './Demo.css'
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Loader from './Loader';

class DetailScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      isfetching:false,
      images: [],
      modelsDetail: [],
      description: '',
      mobileName: '',
      price: '',
      newPrice: '',
      discount: '',
      selectedAttributeOptionMap: {},
      attributeOptionMap: {},
      variantSelected: {},
      variants: [],
      attributesSelected:[],
      quantity:0
    }
    this.increaseProductCount=this.increaseProductCount.bind(this);
    this.decreaseProductCount=this.decreaseProductCount.bind(this);
  }

  increaseProductCount(){
    this.setState({
      quantity:this.state.quantity+1
    })
  }
  decreaseProductCount(){
    if (this.state.quantity > 0) {
    this.setState({
          quantity:this.state.quantity-1
        })
    }
  }
  componentDidMount() {
    this.setState({isfetching:true})
    fetch(`https://assignment-appstreet.herokuapp.com/api/v1/products/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(json => {
        let newModel = json.primary_product.images.map(
          (item, index) => {
            return (
              <div key={index}>
                <img src={item} alt="mobile" />
              </div>
            )
          }
        );
        let images_array = json.primary_product.images;
        let mobile_detail = json.primary_product.desc;
        let mobile_name = json.primary_product.name;
        let mobile_price = json.primary_product.mark_price;
        let new_mobile_price = json.primary_product.sale_price;
        let percent = json.primary_product.sale_msg;
        let selectedList = json.selected_option_ids;
        let vars = json.product_variations;

        let tempAttributeOptionMap = {};
        let selectedMap = {};

        json.options.map(
          (item, index) => {
            json.attributes.map(
              (item1, index1) => {
                if (item.attrib_id === item1._id) {
                  tempAttributeOptionMap[item1.name] = tempAttributeOptionMap[item1.name] || [];
                  tempAttributeOptionMap[item1.name].push(item);
                }

              }
            );
            selectedList.map(
              (item2, index2) => {
                if (item2 === item._id) {
                  selectedMap[item.attrib_id] = item2;
                }
              }
            );
          
          }
        );




        this.setState({
          modelsDetail: newModel,
          description: mobile_detail,
          mobileName: mobile_name,
          price: mobile_price,
          newPrice: new_mobile_price,
          discount: percent,
          images: images_array,
          selectedAttributeOptionMap: selectedMap,
          attributeOptionMap: tempAttributeOptionMap,
          variants: vars,
          isfetching:false,
          attributesSelected: selectedList
        })

        this.setProductVar(selectedMap);

      });
  }

  arrayContainsAnotherArray(needle, haystack) {
    for (var i = 0; i < needle.length; i++) {
      if (haystack.indexOf(needle[i]) === -1)
        return false;
    }
    return true;
  }

  setProductVar(selectedMap) {
    let selectedList = []
    Object.keys(selectedMap).forEach(function (key) {
      selectedList.push(selectedMap[key]);
    });
    this.setState({
      attributesSelected : selectedList
    })
    this.state.variants.map(
      (item, index) => {
        if (this.arrayContainsAnotherArray(selectedList, item.sign)) {
          this.setState({
            variantSelected: item
          })
        }
      }
    )
  }

  setSelectedOption(attributeId, id) {
    let sMap = this.state.selectedAttributeOptionMap;
    sMap[attributeId] = id;
    this.setState({
      selectedAttributeOptionMap: sMap
    })
    this.setProductVar(sMap);
  }

  render() {
    const{isfetching}=this.state;
    let image_array = this.state.images;
    const settings = {
      customPaging: function (i) {
        return (
          <a>
            {<img src={image_array[i]} alt='mobile'/>}
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    let value = this.state.variantSelected.mark_price - this.state.variantSelected.sale_price;
    var sMap = this.state.attributeOptionMap;
    var abc = [];
    return (
      <div>
        {
          isfetching && <Loader/>
        }
        {
          !isfetching && <div>
        <Header />
        <div className="container">
          <div className="left-part">
            
              <div>

                <Slider {...settings}>
                  {this.state.modelsDetail}
                </Slider>
              </div>
           
          </div>
          <div className="right-part">
            <h2>{this.state.variantSelected.name}</h2>
            <p>{this.state.description}</p>
            <hr />
            <p>&#8377;{Math.round(this.state.variantSelected.sale_price)}<span style={{ textDecoration: 'line-through', marginLeft: '3%',fontSize:13 }}>{this.state.variantSelected.mark_price} </span></p >
            <p style={{color:'#38ada9',fontWeight:800}}>You save &#8377;{Math.round(value)}<span style={{ marginLeft: '2%' }}>[{this.state.variantSelected.sale_msg}]</span></p>
            <hr />
            <div className="product-select">
              {
                Object.keys(sMap).forEach(function (key) {
                  let temp = sMap[key];
                  let len = temp.length;
                  abc.push(
                    <div key = {key} className="color-varient" style={{marginTop:15}}>
                      <p>{len}&nbsp;{key}&nbsp;are available</p>
                      <div style={{ marginTop: -10 }}>
                        {
                          temp.map(
                            (item, index) => {
                                  return (
                                <span key={index} style={{ marginLeft: 10, fontSize: 15 }} onClick={() => this.setSelectedOption(item.attrib_id, item._id)}><input type="radio" name={key} readOnly checked={this.state.attributesSelected.includes(item._id)}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.name}</span>
                              )
                            }
                          )
                        }
                      </div>
                    </div>
                  )
                }.bind(this)
                )
              }
              {
                abc.map(
                  (item, index) => item
                )
              }
              <div className="cart-detail" style={{marginTop:15}}>
                <p>Quantity</p>
                <div style={{ marginTop: -15 }}><div style={{ display: 'inline-block', width: 30, border: '1px solid #38ada9', textAlign: 'center', borderRadius: 1 }} onClick={this.decreaseProductCount}>-</div><div style={{ display: 'inline-block', width: 20, textAlign: 'center', color: 'white', backgroundColor: '#38ada9' }}>{this.state.quantity}</div><div style={{ display: 'inline-block', width: 30, border: '1px solid #38ada9', textAlign: 'center', borderRadius: 1 } }onClick={this.increaseProductCount}>+</div></div>
                <button className="add-button">Add to cart</button>
              </div>
            </div>
          </div>
          <div style={{ clear: 'both' }}></div>
        </div>
        <Footer /> 
        </div>
        }
      </div>
    )
  }


}

export default DetailScreen;