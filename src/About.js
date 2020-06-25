import React from "react";
import "./About.css";

class About extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
		};
	}

	componentDidMount() {
		fetch("https://ghibliapi.herokuapp.com/films")
			.then((response) => response.json())
			.then((data) => this.setState({ posts: data }));
	}

	render() {
		return (
			<div className='about-page'>
				<h2>My Movies</h2>
				{this.state.posts.map((post) => {
					return (
						<div className='random-posts' key={post.id}>
							<h2>{post.title}</h2>
							<p>{post.description}</p>
						</div>
					);
				})}
			</div>
		);
	}
}

export default About;
