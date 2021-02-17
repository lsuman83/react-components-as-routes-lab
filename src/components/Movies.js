import React from 'react';
import { movies } from '../data';

const Movies = () => {
  debugger
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie =>
            <div> 
              {movie.title} 
              {movie.time}
              <ul>
                  {movie.genres.map(gen => <li>{gen}</li>)}
              </ul>
            </div>
          )}
    </div>
  );
};

export default Movies;
