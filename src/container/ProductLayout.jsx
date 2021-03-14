import React from "react";
import Card from "../components/multicellular/Card/Card";
import "./ProductLayout.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

class ProductLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    moreVideos: true,
    initialDisplayLength: 8,
    showData: [],
    configData: [],
    loading:true
  };
  apiCall = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((responseJson) => {
        console.log(
          "POST RESPONSE: ",
          "products",
          JSON.stringify(responseJson)
        );
        this.setState({ configData: responseJson.data });
        this.setState({ loading: false });
        
        console.log("Data======1",this.state.configData)
        console.log("Data======2",responseJson)
        this.setState({
          showData: this.state.configData.slice(0, this.state.initialDisplayLength),
        });
      })
      .catch((error) => {
        console.log("POST REQ ERROR: ", error);
      });
  };
  componentDidMount() {
    this.apiCall();
  }
  
  hasMoreProduct = () => {
    return this.state.showData.length < this.state.configData.length;
  };

  fetchMoreData = () => {
    setTimeout(() => {
      this.setState({
        showData: this.state.configData.slice(
          0,
          this.state.showData.length + this.state.initialDisplayLength
        ),
      });
    }, 1500);
  };

  render() {
    return (
      this.state.loading?
      <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>:
      <div className="container-fluid">
        <div
          //  className='product-layout-container'
          className="row"
        >
          <InfiniteScroll
            dataLength={this.state.showData.length}
            next={this.fetchMoreData}
            hasMore={this.hasMoreProduct}
            style={{ overflow: "hidden" }}
            loader={
              this.state.showData.length != this.state.configData.length ? (
                <div>
                  <div className="lds-text">Hang on Loading..</div>
                  <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              ) : null
            }
          >
            {this.state.showData.map((item) => {
              return (
                <div
                  className="product-container"
                  className="col-md-3 col-sm-4"
                >
                  <Card
                    title={item.title}
                    specification={item.category}
                    mrp={item.price}
                    discount={item.price}
                    offer={50}
                    assure={true}
                    rating={4.3}
                    image={item.image}
                  />
                </div>
              );
            })}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default ProductLayout;
