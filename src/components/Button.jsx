import React, { useState } from "react";

function Button({ message }) {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <button
      onClick={() => {
        console.log(message);
        incrementCount();
      }}
    >
      {count}
    </button>
  );
}

export default Button;
