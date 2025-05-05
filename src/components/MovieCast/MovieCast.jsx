import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMoviesCast } from "../../services/api";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchCast() {
      try {
        const data = await fetchMoviesCast(movieId);
        setCast(data.cast);
      } catch (error) {
        console.error("Error fetching cast:", error);
      }
    }

    fetchCast();
  }, [movieId]);

  if (!cast.length) return <p>No cast available.</p>;

  return (
    <ul className={s.castList}>
      {cast.map((actor) => (
        <li key={actor.cast_id} className={s.castItem}>
          {actor.profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
              width="100"
            />
          )}
          <p>
            <strong>{actor.name}</strong> as {actor.character}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
