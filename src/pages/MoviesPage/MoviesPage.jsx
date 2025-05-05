import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (!query) return;

    async function fetchMovies() {
      try {
        const data = await searchMovies(query);

        setMovies(data.results);
      } catch (error) {
        console.error("Error searching movies:", error);
      }
    }

    fetchMovies();
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const value = form.elements.query.value.trim();
    if (!value) return;
    setSearchParams({ query: value });
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          type="text"
          name="query"
          placeholder="Search movies..."
          className={s.input}
        />
        <button type="submit" className={s.searchBtn}>
          Search
        </button>
      </form>

      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
