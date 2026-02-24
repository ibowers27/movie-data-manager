import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/header";
import BodyPiece from "./components/body";

const App = () => {



  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      // const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) throw new Error("failed to fetch");
      const myData = await response.json();
      setData(myData);
      setError(null);
      console.log(data);
    } catch (err) {
      setError(err);
      console.log(err);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Toggle state for wanted/liked list
  const [showWanted, setShowWanted] = useState(true);
  const handleToggle = () => setShowWanted((prev) => !prev);

  return (
    <>
      <Header showWanted={showWanted} onToggle={handleToggle} />
      <BodyPiece showWanted={showWanted} />
    </>
  );



};

export default App;
