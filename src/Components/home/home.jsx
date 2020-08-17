import React from 'react';
import './home.css';
import Product from '../product/product';


const Home = () => {
	return (
		<div className='home'>
			<img className='home__image' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg' alt='' />	
			<div className='home__row'>
				<Product id='12' title='Germ-x Germ-x Hand Sanitizer, Original with Pump, 8 Fl Ounce (Pack of 12), 96 Fl Oz' price={11.96} rating={5} 
				image='https://images-na.ssl-images-amazon.com/images/I/516Pty+03xL._AC_US160_.jpg' />
				<Product id='12' title='Schick Silk Touch-Up Multipurpose Exfoliating Dermaplaning Tool, Eyebrow Razor, and Facial Razor with Precision Cover, 3 Count' price={12.96} rating={5} 
				image='https://images-na.ssl-images-amazon.com/images/I/41a1JBfAaTL._AC_US160_.jpg' />
			</div>
			<div className='home__row'>
				<Product id='12' title='Cuccio Naturalé Milk & Honey Cuticle Revitalizing Oil - Lightweight Super-Penetrating - Nourish, Soothe & Moisturize - Paraben/Cruelty Free, w/ Natural Ingredients/Plant Based Preservatives - 2.5' price={11.96} rating={5} 
				image='https://images-na.ssl-images-amazon.com/images/I/41eMN1c3UkL._AC_US160_.jpg' />
				<Product id='12' title='Logitech C920 Hd Pro Webcam (Black) Black' price={11.96} rating={5} 
				image='https://images-na.ssl-images-amazon.com/images/I/41DWe0t6EcL._AC_US160_.jpg' />
				<Product id='12' title='ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray, F512JA-AS34' price={11.96} rating={5} 
				image='https://images-na.ssl-images-amazon.com/images/I/41oaMSUsOVL._AC_US160_.jpg' />
			</div>
			<div className='home__row' size='large'>
				<Product id='12' title='HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black' price={11.96} rating={5} 
				image='https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg' />
			</div>
		</div>
	);
}

export default Home;