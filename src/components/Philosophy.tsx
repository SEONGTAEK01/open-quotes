import React from "react";
import { Link } from "react-router-dom";

const Philosophy: React.FC = () => {
  return (
    <div className="philosophy">
      <p>
        The quotes do not have to come from old books, sages or saints. <br />
        You can get inspiration for quotes from anything, such as lines in a
        movie, lyrics in music, conversations with someone, interviews with F1
        racers, and lines in games. <br /> Quotes are short, but it should be a
        process that is engraved in the mind for a long time. So let us show it
        slowly. I hope it is not a moment that is consumed quickly.
      </p>
      <p>
        <Link to="/">home</Link>
      </p>
    </div>
  );
};

export default Philosophy;
