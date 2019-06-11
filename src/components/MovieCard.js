import React from 'react';
import moment from 'moment';

const imgURL = 'http://image.tmdb.org/t/p/original';

const MovieCard = (props) => (
	<div className="movie-card">
	<img width="100%" height="auto" src={`${imgURL}${props.moviePoster}`} alt=""/>
		<h3>{props.movieTitle}</h3>
		<p>{moment(props.movieRelease).format('ll')}</p>
	</div>
);

export default MovieCard;