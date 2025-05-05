import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../../services/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.error("Error fetching movie reviews:", error);
      }
    };
    fetchReviews();
  }, [movieId]);

  if (!reviews.length) return <p>No reviews found.</p>;

  return (
    <ul>
      {reviews.map((reviews) => (
        <li key={reviews.id}>
          <h4>{reviews.author}</h4>
          <p>{reviews.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
