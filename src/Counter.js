import React, { useState } from "react";
import "./Shop.css";

export default function Counter({ initialCount }) {
	const [count, setCount] = useState(initialCount);
	const decrease = () => (count > 0 ? setCount((prev) => prev - 1) : count);
	const increase = () => setCount((prev) => prev + 1);

	return (
		<>
			<button className='routin-shop_btn' onClick={decrease}>
				-
			</button>
			<span className='routin-shop_span'>{count}</span>
			<button className='routin-shop_btn' onClick={increase}>
				+
			</button>
		</>
	);
}
