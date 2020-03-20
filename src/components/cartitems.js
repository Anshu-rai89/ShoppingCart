import React from 'react';


class CartItem extends React.Component
{
    constructor()
    {
        super();
        this.state=
        {
            title:'Phone',
            qty:1,
            price:999,
            img:''
        }
      
    }

    

   
    render()
        { 
            const  {title,qty,price,img}=this.state;
            const increase=(prevState)=>
            { console.log('increseing ',this.state);
                  this.setState=qty+1;
            }
           return (
               <div className='cart-item' >
                   <div className='left-block' >
                       <img   style={styles.image}/>
                   </div>
                   <div className='right-block'>
           <div style={{fontSize:20}} >{title}</div>
           <div style={{color:'#777'}} >Rs {price}</div>
           <div style={{color:'#777'}} >{qty}</div>
                    <div className='cart-item-actions'>
                        <img className='action-icons'
                        alt='increase'
                        src='https://image.flaticon.com/icons/svg/1237/1237946.svg'
                        onClick={increase}
                        />
                        <img className='action-icons'
                        alt='decrease'
                        src='https://as2.ftcdn.net/jpg/02/78/84/57/500_F_278845758_9xl3srVgd8p4jquxgxugGaHV1e5EOlLO.jpg'
                        />
                        <img className='action-icons'
                        alt='remove'
                        src='https://image.flaticon.com/icons/svg/1214/1214428.svg'
                        />
                    </div>
                   </div>
               </div>
           )
        }
    
}

const styles=
{
    image:
    {
        height:110,
        width:110,
        borderRadius:5
    }
}

export default CartItem;