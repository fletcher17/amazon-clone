
import React from 'react';
import {useStateValue} from '../stateprovider/stateProvider';
import CheckOutProduct from '../checkoutproduct/checkoutproduct';
import Subtotal from '../subtotal/subtotal';
import './checkout.css';


const CheckOut = () => {
	const [{basket}] = useStateValue();
	return (
			  <div className='checkout'>
			   <div className='checkout__left'>
				<img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt=''/>
				{ basket?.length === 0 ? (
					<div>
						<h2> Your Shopping Basket is empty</h2>
						<p>You have no items in your basket. To buy
						one or more, click "Add to basket" next to the item.
						</p>
					</div>) : 
					(
					<div>
						<h2 className='checkoout__title'>Your Shopping Basket </h2>
						{basket.map(item => 
							<CheckOutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>)}
					</div>)
				}
			  </div>
			  	<div>
			  	  {basket?.length > 0 && (
			  	  	<div className='checkout__right'>
			  	  		<h1>Subtotal</h1>
			  	  		<Subtotal/>
			  	  	</div>
			  	  	)}
			  	</div>

			 </div>

		)
}


export default CheckOut;