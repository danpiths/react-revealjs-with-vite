import { useEffect } from "react";
import Reveal from "reveal.js";
import { revealConfig } from "./lib/revealConfig";

function App() {
  useEffect(() => {
    const deck = new Reveal();
    deck.initialize(revealConfig);
  }, []);

  return <div className="slides"></div>;
}

export default App;
