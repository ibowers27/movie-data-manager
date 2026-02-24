import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import BodyPiece from "./components/body";

const App = () => {

//  EVERYTHING THAT WAS IN THE TEMPLATE IS IN APPJSX.TXT IF NEEDED FOR REFERENCE!


  // Toggle state for wanted/liked list
  const [showWanted, setShowWanted] = useState(true);
  const handleToggle = () => setShowWanted((prev) => !prev);





  return (
    <>
      <Header showWanted={showWanted} onToggle={handleToggle} />
      <BodyPiece showWanted={showWanted} />
      {/* need footer */}
    </>
  );
};

export default App;
