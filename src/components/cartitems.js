import React from 'react';


class CartItem extends React.Component
{
    constructor()
    {
        super();
        
      
    }

    // increase =()=> 
    //         { console.log('increseing ',this.state);
    //               this.setState(
    //                   {
    //                       qty:this.state.qty+1
    //                   }
    //               );
    //               this.setState(
    //                 {
    //                     qty:this.state.qty+1
    //                 }
    //             );
    //             this.setState(
    //                 {
    //                     qty:this.state.qty+1
    //                 }
    //             );
    //         }
    // decrease=()=>
    // {
    //     if(this.state.qty==0)  return ;
    //     else{
    //         console.log('decreasing');
    //         this.setState((prevState)=>
    //         {
    //            return  {
    //                 qty:prevState.qty-1
    //             }
    //         }
    //         );
    //     }
    // }
   
    render(props)
        { 
            const {p}=props.product;
            console.log('rendering');
            
           return (
               <div className='cart-item' >
                   <div className='left-block' >
                       <img   style={styles.image}/>
                   </div>
                   <div className='right-block'>
           <div style={{fontSize:20}} >{props.name}</div>
           <div style={{color:'#777'}} >Rs {p.price}</div>
           <div style={{color:'#777'}} >{p.qty}</div>
                    <div className='cart-item-actions'>
                        <img className='action-icons'
                        alt='increase'
                        src='https://image.flaticon.com/icons/svg/1237/1237946.svg'
                        onClick={this.increase}
                        />
                        <img className='action-icons'
                        alt='decrease'
                        src='https://as2.ftcdn.net/jpg/02/78/84/57/500_F_278845758_9xl3srVgd8p4jquxgxugGaHV1e5EOlLO.jpg'
                        onClick={this.decrease}
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
        borderRadius:5,
        backgroundColor:'#777'
    }
}

export default CartItem;