import React from 'react'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardMovie = ({mov}) => {
  return (
    <div>
      
      <Col xs="6" sm="6" md="4" lg="3" className="my-1">
     <Link to={`/movie/${mov.id}`}>
        <div className="card">
          <img src={'https://image.tmdb.org/t/p/w500/'+mov.poster_path} className="card__image" alt="hu" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>title of film:{mov.original_title}</p>
             <p>date expired:{mov.release_date}</p>
             <p>type categorie:{mov.vote_count}</p>
             <p>rating:{mov.vote_average} </p>
            </div>
          </div>
        </div>
        </Link>
    </Col >
  

    </div>
  );
}

export default CardMovie
