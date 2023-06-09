import { useEffect, useState } from "react";
import "./App.css";
import Search from "./Components/Search";
import Movies from "./Components/Movies";
const API_URl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=15005c48f2625def09dacd3d0fc01762&page=1';

const IMG_Path = 'https://image.tmdb.org/t/p/w1280';

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=15005c48f2625def09dacd3d0fc01762&query="';



function App() {

  const getSearchURL = (query) => {
    const encodedQuery = encodeURIComponent(query);
    return `${SEARCH_URL}${encodedQuery}`;
  };
  const searchMovies = async () => {
    const searchUrl = getSearchURL(text);
    const response = await fetch(searchUrl);
    const data = await response.json();
    setMovies(data.results);
  };
  
  const [text, setText] = useState("");
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=15005c48f2625def09dacd3d0fc01762&page=1');
        const data = await response.json();
        setMovies(data.results);
        console.log(data);
      } catch (error) {
        console.error('API request failed.', error);
      }
    };

    fetchMovies();
  }, []);
  if (movies === null) {
    return <div>Loading...</div>;
  }


  const textHandler = (event) => {
    setText(event.target.value);
    searchMovies()
  };
  return (
    <div>
      <Search text={text} setText={setText} textHandler={textHandler} />
      <Movies movies={movies} setMovies={setMovies}/>

      
    </div>
  );
}

export default App;
