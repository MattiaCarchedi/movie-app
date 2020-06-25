import React from "react";
import "./Shop.css";
import Counter from "./Counter";

const Shop = () => {
	return (
		<div className='routin-shop_page'>
			<h2>My Counter</h2>
			<Counter initialCount={0} />
		</div>
	);
};

export default Shop;
