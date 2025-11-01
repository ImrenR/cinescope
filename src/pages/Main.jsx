import { useContext } from "react";

import MovieCard from "../components/MovieCard";
import { MovieContextt } from "../context/MovieContext";



const Main = () => {
const {films, loading} = useContext(MovieContextt)
  return (
    <div>
      <div className="flex justify-center flex-wrap">
 {/* loading true ise (apiden veriler gelmeden önce) loading resmi görünsün, false olduğunda movies cardlar */}

{loading ? (
<div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
            role="status"
          >
            <span>Loading....</span>
     
      </div>
) : (films.map((film)=> <MovieCard  {...film}/>))}



    </div>
    </div>
  );
}

export default Main;