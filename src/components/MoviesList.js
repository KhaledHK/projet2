import React, { useEffect } from 'react'
import { Row ,Card,Col } from 'react-bootstrap'
import CardMovie from './CardMovie'
import PaginationBar from './PaginationBar';


const MoviesList = ({movies ,getPage ,pageCount}) => {
  useEffect  (()=>{
    console.log('movies', movies)
},[movies])
  
  return (
    
      <Row className="g-4" xs={1} md={4} >


        {movies.length >=1 ? (movies.map((mov)=>{

return(<CardMovie key={mov.id} mov={mov}/>)

        })):<h2>no data broo..</h2>}
        
   
    {movies.length >=1 ? (<PaginationBar getPage={getPage} pageCount={pageCount} />) : null}
    
      </Row>
    
  );
}

export default MoviesList
