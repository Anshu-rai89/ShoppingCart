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
                img:'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80 666w' ,
                id:1
            },
            {
                name:'laptop',
                qty:20,
                price:32000,
                img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3151&q=80 3151w',
                id:2

            },
        {
            name:'watch',
            qty:1000,
            price:100,
            img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80 334w',
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

    getCount()
    {  var count=0;
      const {products}=this.state;

      products.forEach((product)=>
      {
        count+=product.qty;
      });
      return count;
    }

    getPrice()
    {
      let total=0;
      const {products}=this.state;

      products.map((product)=>
      {
        total=total+product.qty*product.price;
      });

      return total;
    }

    render()
        {

          const {products}=this.state;
          return (
            <div className="App">
              <Navbar count={this.getCount()}/>
              <Cart 
              products={products} 
              key={products.id}
              onIncrease={this.increaseHandler} 
              onDecrease={this.decreaseHandler}
              onRemove={this.deleteHandler}
              />
                 <div style={{fontSize:20 ,padding:10}}>Total:{this.getPrice()}
        </div>
            </div>
      
          );
       }
}

export default App;
