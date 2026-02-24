import React, { useState } from "react";

function WantedList({ movies, removeMovie }) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold mb-2">Wanted List</h2>
      <div className="h-96 overflow-y-auto bg-white bg-opacity-80 rounded-lg shadow p-2 flex flex-col gap-2">
        {movies.length === 0 ? (
          <div className="text-gray-500 text-center py-8">No movies</div>
        ) : (
          movies.map((movie, i) => (
            <div key={i} className="border border-gray-400 rounded px-3 py-2 bg-gray-100 flex items-center justify-between">
              <span>{movie}</span>
              <button className="ml-2 px-2 py-1 bg-red-500 text-white rounded" onClick={() => removeMovie(i)}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

function LikedList({ movies, removeMovie }) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-2">Liked Movies</h2>
      <div className="h-96 overflow-y-auto bg-white bg-opacity-80 rounded-lg shadow p-2 flex flex-col gap-2">
        {movies.length === 0 ? (
          <div className="text-gray-500 text-center py-8">No movies</div>
        ) : (
          movies.map((movie, i) => (
            <div key={i} className="border border-gray-400 rounded px-3 py-2 bg-gray-100 flex items-center justify-between">
              <span>{movie}</span>
              <button className="ml-2 px-2 py-1 bg-red-500 text-white rounded" onClick={() => removeMovie(i)}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

// swap list manager
export default function DisplayManager({ showWanted }) {
  const [wantedMovies, setWantedMovies] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);

  const handleAddWanted = () => setWantedMovies([...wantedMovies, "movie"]);
  const handleAddLiked = () => setLikedMovies([...likedMovies, "movie"]);
  const handleRemoveWanted = (idx) => setWantedMovies(wantedMovies.filter((_, i) => i !== idx));
  const handleRemoveLiked = (idx) => setLikedMovies(likedMovies.filter((_, i) => i !== idx));

  return (
    // wanted list
    <div className="w-80 flex flex-col gap-6" style={{ position: 'absolute', top: '2rem', right: -700 }}>
      {showWanted ? (
        <>
          <button className="mb-2 px-3 py-1 bg-blue-500 text-white rounded" onClick={handleAddWanted}>
            Add wanted Movie placeholder
          </button>
          <WantedList movies={wantedMovies} removeMovie={handleRemoveWanted} />
        </>
      ) : ( //like list
        <>
        
          <button className="mb-2 px-3 py-1 bg-green-500 text-white rounded" onClick={handleAddLiked}>
            Add like Movie placeholder
          </button>
          <LikedList movies={likedMovies} removeMovie={handleRemoveLiked} />
        </>
      )}
    </div>
  );
}

