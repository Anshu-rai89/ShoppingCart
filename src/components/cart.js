import React from 'react';
import CartItems  from './cartitems';




const  Cart =(props)=>
{
    const {products}=props;
        return (

        
            <div className='cart-item'>
                
            { 
                products.map((product)=>
                    {
                    return (
                    <CartItems 
                    product={product}
                    key={product.id}
                    onIncrease={props.onIncrease} 
                    onDecrease={props.onDecrease}
                    onRemove={props.onRemove}
                    />
                    )}
                    )
            }
          </div>
        ); 
    
}


export default Cart;