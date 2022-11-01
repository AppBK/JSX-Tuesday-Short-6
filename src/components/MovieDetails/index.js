import { useParams } from 'react-router-dom';

function MovieDetails({ movies }) {
  const { movieId } = useParams();
  console.log(movieId);
  
  let movieChoice = movies.find((movie) => movie.id === +movieId);
  console.log(movieChoice)
  
  return (
    <div className='comp purple'>
      <h1>{movieChoice.title}</h1>
      <p>{movieChoice.description}</p>
    </div>
  );
}

export default MovieDetails;