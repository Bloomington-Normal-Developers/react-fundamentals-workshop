import { useState } from "react";

function Button({ message }) {
  const [count, setCount] = useState(0);
  const [on, setOn] = useState(false);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <button
      style={{ backgroundColor: on ? "green" : "red" }}
      onClick={() => {
        console.log(message);
        incrementCount();
        setOn(!on);
      }}
    >
      {count}
    </button>
  );
}

export default Button;
