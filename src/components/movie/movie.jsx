import './movie.styles.css';

export const Movie = ({ description, popularity, rating, title }) => (
  <div className="movie">
    <h2 className="movie-title">{title}</h2>
    <div className="movie-content">
      {!!description && <p>{description}</p>}
      <div className="movie-meta">
        <p>Rating: {rating}/10</p>
        <p>Popularity: {popularity}</p>
      </div>
    </div>
  </div>
);