import React from "react";
import "./../styles/_logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images importées depuis la balise img sont acessibles dans "public" */}
      <img src="./logo192.png" alt="logo React" />
      <h3>React World</h3>
    </div>
  );
};

export default Logo;