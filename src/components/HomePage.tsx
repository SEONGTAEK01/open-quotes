import React from "react";
import { Link } from "react-router-dom";
import "../styles/style_main.css";

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <body>
        <blockquote>
          <p>
            "가구는 제작소에서 완성되는 것이 아니라 공간에서 완성된다."
            <br />- <em>Orebro Studio</em>, <em>&lt;어떤 잡지&gt;</em>
          </p>
        </blockquote>
        <p>
          <Link to="/philosophy">Philosophy</Link>
        </p>
      </body>
    </div>
  );
};

export default HomePage;
