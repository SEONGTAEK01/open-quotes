import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/style_main.css";
import sentences from "./quotes";

const HomePage: React.FC = () => {
  const [sentence, setSentence] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const randomSentence = sentences[randomIndex];
    setSentence(randomSentence);
  }, []);

  return (
    <div className="homepage">
      <blockquote>
        <p>{sentence}</p>
      </blockquote>
      <p>
        <Link to="/philosophy">philosophy</Link>
      </p>
    </div>
  );
};

export default HomePage;
