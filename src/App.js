import {useState} from 'react';

export default function App(){
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  const handleClick = () => {
    setFirstCount((count) => count + 1); // No re-render yet
    setSecondCount((count) => count + 0.5); // No re-render yet
    // Re-render (updates batched)
  };
  /*
  const alternativeHandleClick = () => {
    Promise.resolve().then(() => {
      setFirstCount((count) => count + 1); // Re-render
      setSecondCount((count) => count + 0.5); // Re-render
    });
  };
  */

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <span
        style={{
          color: firstCount % 2 === 0 ? "blue" : "black",
        }}
      >
        {secondCount}
      </span>
    </div>
  );
};