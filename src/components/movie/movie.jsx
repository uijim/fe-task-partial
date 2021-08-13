import { Image } from '../../components';

import './movie.styles.css';

export const Movie = ({ description, imagePath, popularity, rating, title }) => {
  const imageSrc = `https://image.tmdb.org/t/p/w500${imagePath}`;

  return (
    <div className="movie">
      <Image src={imageSrc} alt={`Poster for ${title}`} width={250} />
      <div className="movie-content">
        <h2 className="movie-title">{title}</h2>
        {!!description && <p>{description}</p>}
        <div className="movie-meta">
          <p>Rating: {rating}/10</p>
          <p>Popularity: {popularity}</p>
        </div>
      </div>
    </div>
  );
}