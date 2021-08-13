import './image.styles.css';

export const Image = ({ alt = '', src, width = 200 }) => {
  if (!src) return null;

  return <img className="image" src={src} style={{ width: `${width}px`}} alt={alt} />
};