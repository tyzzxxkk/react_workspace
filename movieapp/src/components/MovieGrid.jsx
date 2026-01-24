import { IMG } from "../lib/tmdb";

export default function MovieGrid({ movies, onClickMovie }) {
  return (
    <div className="grid">
      {movies.map((m) => (
        <button
          key={m.id}
          className="posterBtn"
          onClick={() => onClickMovie(m.id)}
          title={m.title}
        >
          {m.poster_path ? (
            <img className="poster" src={IMG.poster(m.poster_path)} alt={m.title} />
          ) : (
            <div className="poster placeholder" />
          )}
        </button>
      ))}
    </div>
  );
}