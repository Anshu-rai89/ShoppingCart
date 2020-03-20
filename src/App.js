import React from 'react';
import Cart from './components/cart'
import Navbar from './components/navbar';
import './App.css';

class App extends React.Component {

  constructor()
    {
        super();

        this.state=
        {
            products:[
            {
                name:'phone',
                qty:1,
                price:999,
                img:'',
                id:1
            },
            {
                name:'laptop',
                qty:20,
                price:32000,
                img:'',
                id:2

            },
        {
            name:'mobile',
            qty:1000,
            price:10000,
            img:'',
            id:3
        }]
      
    }
  }

    increaseHandler =(product)=>
    {  console.log(product);
        const {products}=this.state;
        const index=products.indexOf(product);
        console.log(index);
        products[index].qty+=1;

        this.setState(
            {
                products:products
            }
        );
    }


    decreaseHandler =(product)=>
    {  console.log(product);
        const {products}=this.state;
        const index=products.indexOf(product);
        console.log(index);

        if(products[index].qty!==0)
        products[index].qty-=1;

        this.setState(
            {
                products:products
            }
        );
    }

    deleteHandler=(product)=>
    {
        const {products}=this.state;
        const index=products.indexOf(product);
        products.splice(index,1);

        this.setState(
            {
                products:products
            }
        );
    }

    getcount()
    {  var count=0;
      const {products}=this.state;

      products.forEach((product)=>
      {
        count+=product.qty;
      });
      return count;
    }

    render()
        {

          const {products}=this.state;
          return (
            <div className="App">
              <Navbar count={this.getcount()}/>
              <Cart 
              products={products} 
              key={products.id}
              onIncrease={this.increaseHandler} 
              onDecrease={this.decreaseHandler}
              onRemove={this.deleteHandler}
              />

            </div>
          );
       }
}

export default App;
