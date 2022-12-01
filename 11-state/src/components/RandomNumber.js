import { useState } from "react";

import generateRandomeNumber from "./Utils/ generateRandomeNumber";

function RandomeNumber({ maxNum }) {
  const [randomeNum, setRandomeNum] = useState(generateRandomeNumber(maxNum));
  const changeNum = () => {
    setRandomeNum(generateRandomeNumber(maxNum));
  };

  return (
    <div>
      <h1>{randomeNum}</h1>
      <button onClick={changeNum}>Generate random number</button>
    </div>
  );
}

export default RandomeNumber;
