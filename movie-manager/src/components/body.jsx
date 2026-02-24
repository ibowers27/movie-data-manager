const BodyPiece = () => {
  return (
    <main className="bodyPiece min-h-screen pt-8" style={{ position: 'relative' }}>
      <div
        className="w-80 flex flex-col gap-6"
        style={{ position: 'absolute', top: '2rem', right: -700 }}
      >
        {/* Wanted movies display */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Wanted List</h2>
          <div className="h-48 overflow-y-auto bg-white bg-opacity-80 rounded-lg shadow p-2 flex flex-col gap-2">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="border border-gray-400 rounded px-3 py-2 bg-gray-100">Wanted Movie {i + 1}</div>
            ))}
          </div>
        </section>

        
        {/* Liked Movies Section */}
        <section>
          <h2 className="text-xl font-bold mb-2">Liked Movies</h2>
          <div className="h-48 overflow-y-auto bg-white bg-opacity-80 rounded-lg shadow p-2 flex flex-col gap-2">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="border border-gray-400 rounded px-3 py-2 bg-gray-100">Liked Movie {i + 1}</div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default BodyPiece;