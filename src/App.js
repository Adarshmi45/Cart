import React from "react";
import Cart from "./Cart"
import Navbar from "./Navbar";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 4,
          img: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          id: 1
        },
        {
          price: 9999,
          title: 'Mobile phone',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80',
          id: 2
        },
        {
          price: 45000,
          title: 'Laptop',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
          id: 3
        }
      ]
    }
  }

 

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products
    })
  }
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const {products} = this.state;
    let count = 0;
    products.forEach((product) => {
        count += product.qty;
    });
    return count;
  }

  getCartTotal = () =>{
    const {products} = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal;
  }
  render() {
    const {products}=this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <Cart 
        products = {products}
         onIncreaseQuantity={this.handleIncreaseQuantity}
         onDecreaseQuantity={this.handleDecreaseQuantity}
         onDeleteProduct = {this.handleDeleteProduct}/>
         <div style={{margin :10 , paddng: 10,fontSize: 20}}>TOTAL: Rs {this.getCartTotal()}/-</div>
      </div>
    );
  }
}



export default App;
