import React from 'react';
import MovieCard from './MovieCard';

const Movies = (props) => (
	<div className="movies">
		{
			props.movies.map((movie, index) => (
				<MovieCard 
					moviePoster={movie.poster_path}
					movieTitle={movie.title}
					movieRelease={movie.releaseDate}
				/>
			))
		}
	</div>
);

export default Movies;