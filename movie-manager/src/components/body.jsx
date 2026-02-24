import React from "react";
import DisplayManager from "./DisplayManager.jsx";


const BodyPiece = ({ showWanted }) => {
  return (
    <main className="bodyPiece min-h-screen pt-8" style={{ position: 'relative' }}>
      <DisplayManager showWanted={showWanted} />
    </main>
  );
};

export default BodyPiece;