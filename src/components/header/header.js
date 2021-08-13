export const Header = ({ icon = false, text }) => (
  <h1>
      <span>
        {!!icon && (
          <span role="img" aria-label="Popcorn emoji">
            🍿
          </span>
        )}{' '}
        {text}
      </span>
  </h1>
);