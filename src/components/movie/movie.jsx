import { Image } from '../../components';

import './movie.styles.css';

export const Movie = ({ description, genres = [], imagePath, popularity, rating, title }) => {
  const imageSrc = `https://image.tmdb.org/t/p/w500${imagePath}`;
  const movieGenres = genres.map(genre => genre.name).join(', ');

  return (
    <div className="movie">
      <Image src={imageSrc} alt={`Poster for ${title}`} width={250} />
      <div className="movie-content">
        <h2 className="movie-title">{title}</h2>
        {!!description && <p>{description}</p>}
        <div className="movie-meta">
          <p><strong>Rating:</strong> {rating}/10</p>
          <p><strong>Popularity:</strong> {popularity}</p>
          <p><strong>Genres:</strong> {movieGenres}</p>
        </div>
      </div>
    </div>
  );
}