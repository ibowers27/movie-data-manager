import React from "react";

export function WantedList({ movies = [] }) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold mb-2">Wanted List</h2>
      <div className="h-96 overflow-y-auto bg-white bg-opacity-80 rounded-lg shadow p-2 flex flex-col gap-2">
        {movies.length === 0 ? (
          <div className="text-gray-500 text-center py-8">No movies</div>
        ) : (
          movies.map((movie, i) => (
            <div key={i} className="border border-gray-400 rounded px-3 py-2 bg-gray-100">{movie}</div>
          ))
        )}
      </div>
    </section>
  );
}

export function LikedList({ movies = [] }) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-2">Liked Movies</h2>
      <div className="h-96 overflow-y-auto bg-white bg-opacity-80 rounded-lg shadow p-2 flex flex-col gap-2">
        {movies.length === 0 ? (
          <div className="text-gray-500 text-center py-8">No movies</div>
        ) : (
          movies.map((movie, i) => (
            <div key={i} className="border border-gray-400 rounded px-3 py-2 bg-gray-100">{movie}</div>
          ))
        )}
      </div>
    </section>
  );
}
