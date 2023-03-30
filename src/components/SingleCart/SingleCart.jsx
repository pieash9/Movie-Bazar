import React from 'react';

const SingleCart = ({movie , handleWatchTime}) => {
    return (
        <div className='col'>
            <div className="movie-card text-center card p-3 h-100">
                    <div className='movie-poster w-50 mx-auto my-3'>
                        <img className='w-75  rounded' src={movie.poster} alt="" />
                    </div>
                    <h3>{movie.movieName}</h3>
                    <p>Description: {movie.description}</p>
                    <div className="timeAndRating d-flex justify-content-around">
                        <p>Watch Time: {movie.watchTime}</p>
                        <p>Rating: {movie.imdbRating}</p>
                    </div>
                    <button onClick={()=> handleWatchTime(movie.watchTime)} className="btn btn-info w-75 m-auto mb-3">Book Now</button>
                </div>
        </div>
    );
};

export default SingleCart;