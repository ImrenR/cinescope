
import MovieCard from '../components/MovieCard';

const Main = () => {

  return (
    <div>
      <div className="flex justify-center flex-wrap">
        {/* loading true ise (apiden veriler gelmeden önce) loading resmi görünsün, false olduğunda movies cardlar */}
<div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
            role="status"
          >
            <span>Loading....</span>
     
      </div>
    </div>
    </div>
  );
}

export default Main;