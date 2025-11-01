import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";



export const MovieContextt= createContext()

const MovieContext = ({children}) => {


const api_key=process.env.REACT_APP_TMDB_KEY;
const URL=`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`

const [films, setFilms] = useState([]);
const [loading, setLoading] = useState(false)


useEffect(() => {
  setLoading(true)
axios.get(URL).then((res)=>setFilms(res.data.results))
.finally(()=>setLoading(false))
}, [])

  



  return <MovieContextt.Provider value={{films,loading}}>
    {children}
  </MovieContextt.Provider>




}

export default MovieContext