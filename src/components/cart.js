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
                img:''
            },
            {
                name:'laptop',
                qty:20,
                price:32000,
                img:''

            },
        {
            name:'mobile',
            qty:1000,
            price:10000,
            img:''
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
                    return (<CartItems product={product}/>
                    )}
                    )
            }
          </div>
        ); 
    
}
    }


export default cart;