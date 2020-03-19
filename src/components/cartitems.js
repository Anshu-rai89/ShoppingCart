import React from 'react';


class CartItem extends React.Component
{
    render()
        {
           return (
               <div >
                   <div >
                       <img src='' />
                   </div>
                   <div>
                    <div style={{fontSize:20}} >{title}</div>
                    <div style={{color:'#777'}} >Rs {price}</div>
                    <div style={{color:'#777'}} >{qty}</div>
                    <div>
                        <img 
                        alt='increase'
                        src=''
                        />
                        <img 
                        alt='decrease'
                        src=''
                        />
                        <img 
                        alt='remove'
                        src=''
                        />
                    </div>
                   </div>
               </div>
           )
        }
    
}