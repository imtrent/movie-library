import React from 'react';
import axios from 'axios';
import moment from 'moment';
import Movies from './Movies';

export default class MovieLibrary extends React.Component {
	state = {
		popularMovies: []
	};

	componentWillMount() {
		axios.get('http://localhost:3000/api/movies').then(response => {
			this.setState({
				popularMovies: response.data.results
			});
		})
	}

	render() {
		console.log(this.state.popularMovies);
		// const imgURL = 'http://image.tmdb.org/t/p/original';
		// const movies = this.state.popularMovies.map((movie, index) => {
		// 	return (
		// 		<div>
		// 			<img width="40px" height="50px" src={`${imgURL}${movie.poster_path}`} alt={`${movie.title} Poster`}/>
		// 			<h3 key={movie.id}>{movie.title}</h3>
		// 			<p key={movie.id + 1}>{moment(movie.release_date).format('ll')}</p>
		// 		</div>
		// 	)
		// });

		return (
			<Movies 
				movies={this.state.popularMovies}
			/>
		);
	}
}