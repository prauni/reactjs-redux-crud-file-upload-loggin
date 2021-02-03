import React, { useState } from "react";

function Counternew() {
  const [count, msetCount] = useState(0);

  const incrementCount = () => {
    msetCount((kprevCount) => {
      return kprevCount + ' + hello';
	  return kprevCount + 1;
    });
  };

  const decrementCount = () => {
    msetCount((prevCount) => {
      return prevCount - 1;
    });
  };

  return (
    <div>
      <strong>Count: {count}</strong>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

export default Counternew;
