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
    this.db=firebase.firestore();
  }


  // calling component did mount and loading data from firebase and updating state

  componentDidMount()
  {
    // firebase
    // .firestore()
    // .collection('product')
    // .get()
    // .then((snapshots)=>
    // {
    //   console.log(snapshots);
    //   snapshots.docs.map((doc)=>
    //   {
    //     console.log(doc.data());
    //   });

    //   const products=snapshots.docs.map((doc)=>
    //   {  let data=doc.data();
    //        data['id']=doc.id;

    //     return data;
    //   });

    //   this.setState(
    //     {
    //       products:products,
    //       loading:false
    //     }
    //   );
     this.db
    .collection('product')
    .onSnapshot((snapshots)=>
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
      )
    }
      );
  }
    increaseHandler =(product)=>
    {  console.log(product);
        const {products}=this.state;
        const index=products.indexOf(product);
        console.log(index);
        const dataRef=this.db.collection('product').doc(products[index].id);

        dataRef.update(
          {
            qty:products[index].qty+=1
          }
        )
        .then(()=>
          {
            console.log('updated succussfully');
          })
          .catch((err)=>
          {
            console.log('error',err);
          })
        }
    


    decreaseHandler =(product)=>
    {  console.log(product);
        const {products}=this.state;
        const index=products.indexOf(product);
        console.log(index);

        if(products[index].qty!==0)
        {
          const dataRef=this.db.collection('product').doc(products[index].id);

          dataRef.update(
            {
              qty:products[index].qty-=1
            }
          )
          .then(()=>
          {
            console.log('updated succussfully');
          })
          .catch((err)=>
          {
            console.log('error',err);
          })
        }

       
    }

    deleteHandler=(id)=>
    {
        const {products}=this.state;
        const dataRef=this.db.collection('product').doc(id);
        dataRef.delete()
        .then(()=>
        {
          console.log('deletd succesfully');
        })
        .catch((error)=>
        {
          console.log('error',error);
        })
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
   addProdcut=()=>
   {
      this.db
      .collection('product')
      .add(
        {
          name:'washing machine',
          qty:1,
          price:8000,
          img:'https://images-na.ssl-images-amazon.com/images/I/81HApTZ8D8L._SY879_.jpg'
        }
      )
      .then((docRef)=>
      {
        console.log('product added',docRef);
      })
      .catch((err)=>
      {
        console.log('error',err);
      })
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
                 <button onClick={this.addProdcut} style={{padding:10 , fontSize:20}}>Add product</button>
        </div>
            </div>
      
          );
       }
}

export default App;
