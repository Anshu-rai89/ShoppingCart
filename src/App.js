import React from 'react';
import Cart from './components/cart'
import Navbar from './components/navbar';
import './App.css';
import * as firebase from 'firebase';

class App extends React.Component {

  constructor()
    {
        super();

        this.state=
        {
            products:[],
            loading:true
      
    }
  }


  // calling component did mount and loading data from firebase and updating state

  componentDidMount()
  {
    firebase
    .firestore()
    .collection('product')
    .get()
    .then((snapshots)=>
    {
      console.log(snapshots);
      snapshots.docs.map((doc)=>
      {
        console.log(doc.data());
      });

      const products=snapshots.docs.map((doc)=>
      {  let data=doc.data();
           data['id']=doc.id;

        return data;
      });

      this.setState(
        {
          products:products,
          loading:false
        }
      );
    })
  }
    increaseHandler =(product)=>
    {  console.log(product);
        const {products}=this.state;
        const index=products.indexOf(product);
        console.log(index);
        products[index].qty+=1;

        this.setState(
            {
                products:products,
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

          const {products,loading}=this.state;
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

              {loading && <h1>loading....</h1>}
                 <div style={{fontSize:20 ,padding:10}}>Total:{this.getPrice()}
        </div>
            </div>
      
          );
       }
}

export default App;
