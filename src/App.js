import { Container, Pagination } from "react-bootstrap";
import MoviesList from "./components/MoviesList";
import NavBar from "./components/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Apply from "./components/Apply";


function App() {
const [movies,setMovies]=useState([])
const [pageCount,setPageCount]=useState(0)

  //get all movies
  const getAllMovies= async ()=>{
// const res =await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=915eff0dabe194e65bdee119eb16b707&language=en-US")
const res =await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=be2b889dbaf34f81ce8f448e31a0b6b9&language=en-US")

setMovies(res.data.results)
setPageCount(res.data.total_pages)

  }

//   const getAllMovies= async ()=>{
// const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=be2b889dbaf34f81ce8f448e31a0b6b9&language=en-US',{method:"get"})
// setMovies(await res.json().results)
// console.log('res.json()', await res.json())
//   }
    //get current page
    const getPage= async (page)=>{
      const res =await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=be2b889dbaf34f81ce8f448e31a0b6b9&language=en-US&page=${page}`)
      setMovies(res.data.results)
      setPageCount(res.data.total_pages)
        }

  useEffect(()=>{
getAllMovies();

  },[])

  const search= async (word) => {
    if(word===""){getAllMovies()}
    else{
    const res =await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=be2b889dbaf34f81ce8f448e31a0b6b9&language=en-US&page=1&include_adult=false&query=${word}&language=en-US`)
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
    }
  }


  return (
    <div className="App">
      <NavBar search={search}/>

   <Container>
    <BrowserRouter>
    <Routes>

   <Route path="/" element={ <MoviesList movies={movies} getPage={getPage} pageCount={pageCount} />}/>
   <Route path="/movie/:id" element={ <MovieDetails />} />
   {/* <Route path="/test" element={ <Apply />} /> */}

    </Routes>
    </BrowserRouter>
   </Container>
   
    </div>
  );

}

export default App;
