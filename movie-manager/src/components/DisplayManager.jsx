import React from "react";

function WatchlistPanel({ movies, onRemove }) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-2 text-base-content">Watchlist</h2>
      <div className="h-96 overflow-y-auto bg-base-100 rounded-lg shadow p-2 flex flex-col gap-2">
        {movies.length === 0 ? (
          <div className="text-base-content/50 text-center py-8">
            No movies watchlisted yet
          </div>
        ) : (
          movies.map((title) => (
            <div key={title} className="card card-compact bg-base-200 shadow-sm">
              <div className="card-body flex-row items-center justify-between py-2 px-3">
                <span className="text-sm">{title}</span>
                {/* btn-error = dark red (#7f2d31) */}
                <button
                  className="btn btn-xs bg-[#7f2d31] text-white"
                  onClick={() => onRemove(title)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

function LikedPanel({ movies, onRemove }) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-2 text-base-content">Liked Movies</h2>
      <div className="h-96 overflow-y-auto bg-base-100 rounded-lg shadow p-2 flex flex-col gap-2">
        {movies.length === 0 ? (
          <div className="text-base-content/50 text-center py-8">
            No liked movies yet
          </div>
        ) : (
          movies.map((title) => (
            <div key={title} className="card card-compact bg-base-200 shadow-sm">
              <div className="card-body flex-row items-center justify-between py-2 px-3">
                <span className="text-sm">{title}</span>
                {/* btn-error = dark red (#7f2d31) */}
                <button
                  className="btn btn-xs bg-[#7f2d31] text-white"
                  onClick={() => onRemove(title)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default function DisplayManager({
  sidebarView,
  watchlist,
  liked,
  onRemoveWatchlist,
  onRemoveLike,
}) {
  // Show the panel that matches the current sidebarView
  if (sidebarView === "watchlist") {
    return <WatchlistPanel movies={watchlist} onRemove={onRemoveWatchlist} />;
  }

  if (sidebarView === "liked") {
    return <LikedPanel movies={liked} onRemove={onRemoveLike} />;
  }

  return null;
}