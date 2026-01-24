import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TMDB } from "../lib/tmdb";
import MovieGrid from "./MovieGrid";

export default function Home() {
  const nav = useNavigate();
  const [genres, setGenres] = useState([]);

  const [query, setQuery] = useState("");
  const [genreId, setGenreId] = useState("");
  const [sortBy, setSortBy] = useState("popularity.desc");

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1); // ✅ 현재 페이지
  const [hasMore, setHasMore] = useState(true);

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  // ✅ 현재 “모드” (검색어 있으면 search, 없으면 discover)
  const mode = useMemo(() => (query.trim() ? "search" : "discover"), [query]);

  // ✅ 장르 목록 불러오기 + 첫 화면 기본 포스터(자동 로딩)
  useEffect(() => {
    (async () => {
      try {
        const g = await TMDB.genres();
        setGenres(g.genres ?? []);
      } catch (e) {
        setErr(e.message);
      }
    })();

    // ✅ 처음 들어오면 인기 영화 1페이지 자동 로딩
    fetchMovies({ reset: true, nextPage: 1, forceDiscover: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchMovies({ reset, nextPage, forceDiscover = false } = {}) {
    setLoading(true);
    setErr("");

    try {
      let data;

      // forceDiscover=true면 시작 시 무조건 discover로 기본 포스터 띄우기
      const effectiveMode = forceDiscover ? "discover" : mode;

      if (effectiveMode === "search") {
        data = await TMDB.searchMovies({
          query: query.trim(),
          page: nextPage ?? page,
        });
      } else {
        data = await TMDB.discoverMovies({
          sort_by: sortBy,
          with_genres: genreId,
          page: nextPage ?? page,
        });
      }

      const results = data.results ?? [];
      const totalPages = data.total_pages ?? 1;

      if (reset) {
        setMovies(results);
      } else {
        setMovies((prev) => [...prev, ...results]);
      }

      const newPage = nextPage ?? page;
      setPage(newPage);
      setHasMore(newPage < totalPages);
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }

  // ✅ 확인 버튼: 조건(검색/장르/정렬) 반영해서 1페이지부터 다시
  async function onSubmit(e) {
    e.preventDefault();
    await fetchMovies({ reset: true, nextPage: 1 });
  }

  // ✅ 더보기 버튼
  async function onLoadMore() {
    if (loading || !hasMore) return;
    await fetchMovies({ reset: false, nextPage: page + 1 });
  }

  return (
    <div className="page">
      {/* ✅ 전체 덩어리를 가운데로 묶는 래퍼 */}
      <div className="container">
        <h1 className="title">Movie App</h1>
  
        <form className="controls" onSubmit={onSubmit}>
          <input
            className="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="검색어를 입력하세요"
          />
  
          <div className="pillRow">
            <div className="selectWrap">
              <select
                className="pillSelect"
                value={genreId}
                onChange={(e) => setGenreId(e.target.value)}
                disabled={mode === "search"}
                title={mode === "search" ? "검색어를 지우면 장르 필터를 사용할 수 있어요" : ""}
              >
                <option value="">장르 별</option>
                {genres.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.name}
                  </option>
                ))}
              </select>
              <span className="caret" />
            </div>
  
            <div className="selectWrap">
              <select
                className="pillSelect"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                disabled={mode === "search"}
                title={mode === "search" ? "검색어를 지우면 정렬을 사용할 수 있어요" : ""}
              >
                <option value="popularity.desc">정렬 기준</option>
                <option value="popularity.desc">인기순</option>
                <option value="vote_average.desc">평점순</option>
                <option value="release_date.desc">최신순</option>
                <option value="revenue.desc">흥행순</option>
              </select>
              <span className="caret" />
            </div>
  
            <button className="pillBtn" type="submit">
              확인
            </button>
          </div>
        </form>
  
        {err && <div className="msg error">{err}</div>}
        {loading && movies.length === 0 && <div className="msg">불러오는 중…</div>}
  
        <MovieGrid movies={movies} onClickMovie={(id) => nav(`/movie/${id}`)} />
  
        <div className="loadMoreArea">
          {loading && movies.length > 0 && <div className="msg">추가 로딩중…</div>}
  
          {!loading && hasMore && movies.length > 0 && (
            <button className="pillBtn" type="button" onClick={onLoadMore}>
              더 보기
            </button>
          )}
  
          {!hasMore && movies.length > 0 && (
            <div className="msg">마지막 페이지입니다.</div>
          )}
        </div>
      </div>
    </div>
  );  
}