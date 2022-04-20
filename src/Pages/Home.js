import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';



const Home = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () =>{
      setLoading(true);
      try {
        const { data } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sorty_by=rating");
        // console.log(data.data.movies);
        setMovies(data.data.movies);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error.message);
      }
    }

    fetchMovies();
  }, []);
  return (
    <section className="container">
      {loading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : movies.length ? (
        <div className="movies">
            {movies.length && movies.map(movie => (
              <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres}
              />
          ))}
        </div>
    ) : null}
    </section>
    );
}

export default Home;
