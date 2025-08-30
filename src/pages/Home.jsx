import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <div className="home-description">
        <h1 className="home-heading">
          Discover & Save Your Favorite Movies! 🎬
        </h1>
        <p className="home-para">
          Welcome to ReelPicks – your go-to platform for discovering the latest
          movies and curating your personal favorites. Stay updated with new
          releases, explore a vast collection of films, and build your own
          watchlist effortlessly. Whether you're a casual moviegoer or a true
          cinephile, ReelPicks makes finding and saving great movies simple and
          enjoyable. Start exploring today!
        </p>
        <p className="home-info">
          🔹 Stay updated with the newest releases ⭐ Save movies to your
          favorites list
        </p>
        <p className="home-info">
          📢 Start exploring now and pick your next favorite movie!
        </p>
      </div>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="🔍 Search movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
