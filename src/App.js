import React from "react";
import Bio from "./Bio";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import Home from "./Home";
import Movie from './Movie';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/bio" component={Bio} />
					<Route path="/shop" component={Shop} />
					<Route path="/about" exact component={About} />
					<Route path="/about/:id" component={Movie}/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
