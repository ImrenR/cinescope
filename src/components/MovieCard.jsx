
const MovieCard = () => {

  
  return (
    <div
     
      className="movie"
      id="container"
    >
      {/* img için base adrese endpoint olaraka dizideki poster_path eklenecek */}
      <img

        loading="lazy"
        src={``}
        alt=""
      />

      <div className="flex align-baseline justify-between p-1 text-white">
        <h5>{} </h5>
        <span
       
        >
       
        </span>
      </div>

      <div className="movie-over">
        <h2>Overview</h2>
        <p>{} </p>
      </div>
    </div>
  );
}

export default MovieCard