import React from 'react';
import axios from 'axios';

export default class MovieLibrary extends React.Component {

	componentWillMount() {
		axios.get('http://localhost:3000/api/movies').then(response => {
			console.log(response.data);
		})
	}

	render() {
		return (
			<p>Movie Library</p>
		);
	}
}