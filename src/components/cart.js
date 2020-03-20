import React from 'react';
import CartItems  from './cartitems';



class cart extends React.Component
{
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

    render()
        {

            const {products}=this.state;
        return (
            <div className='cart-item'>
            {
                products.map((product)=>
                    {
                    return (<CartItems product={product} key={product.id} onIncrease={this.increaseHandler} onDecrease={this.decreaseHandler}/>
                    )}
                    )
            }
          </div>
        ); 
    
}
    }


export default cart;