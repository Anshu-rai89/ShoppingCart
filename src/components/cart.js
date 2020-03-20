import React from 'react';
import CartItems  from './cartitems';



class cart extends React.Component
{
    constructor()
    {
        super();

        this.state=
        {
            product:[
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

    render()
        {

            const {product}=this.state;
        return (
            <div className='cart-item'>
            {
                product.map((product)=>
                    {
                    return (<CartItems product={product} key={product.id}/>
                    )}
                    )
            }
          </div>
        ); 
    
}
    }


export default cart;