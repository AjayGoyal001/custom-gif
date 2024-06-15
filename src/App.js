import React from "react";
import Random from './component/Random';
import Tags from './component/Tags';

function App() {
  return (
    <div className="back background">
      <h1 className="heading">RANDOM GIFS</h1>
      <div className="com">
        <Random />
        <Tags />
      </div>
    </div>
  );
}

export default App;
