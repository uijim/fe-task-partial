export const Movie = ({ description, popularity, rating, title }) => (
  <div>
    <h2>{title}</h2>
    {!!description && <p>{description}</p>}
    <p>Rating: {rating}/10</p>
    <p>Popularity: {popularity}</p>
  </div>
);