// src/pages/MovieDetail.jsx
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IMG, TMDB } from "../lib/tmdb";

export default function MovieDetail() {
  const { id } = useParams();
  const nav = useNavigate();

  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setErr("");
      try {
        const [detail, credits] = await Promise.all([
          TMDB.movieDetail(id),
          TMDB.movieCredits(id),
        ]);
        setMovie(detail);
        setCast((credits.cast ?? []).slice(0, 8));
      } catch (e) {
        setErr(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <div className="page"><div className="msg">불러오는 중…</div></div>;
  if (err) return <div className="page"><div className="msg error">{err}</div></div>;
  if (!movie) return null;

  return (
    <div className="page detailPage">
      <h1 className="title">{movie.title}</h1>

      <div className="detailLayout">
        <div className="detailPosterBox">
          {movie.poster_path ? (
            <img className="detailPoster" src={IMG.poster(movie.poster_path)} alt={movie.title} />
          ) : (
            <div className="detailPoster placeholder" />
          )}
        </div>

        <div className="detailText">
          <div className="section">
            <div className="label">줄거리 :</div>
            <div className="text">
              {movie.overview?.trim() ? movie.overview : "줄거리 정보가 없습니다."}
            </div>
          </div>

          <div className="section" style={{ marginTop: 28 }}>
            <div className="label">출연진 :</div>
            <div className="text">
              {cast.length ? cast.map((c) => c.name).join(", ") : "출연진 정보가 없습니다."}
            </div>
          </div>
        </div>
      </div>

      <button className="pillBtn backBtn" onClick={() => nav(-1)}>
        뒤로 가기
      </button>
    </div>
  );
}