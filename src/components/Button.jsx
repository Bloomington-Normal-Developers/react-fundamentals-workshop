function Button({ message }) {
  return (
    <button
      onClick={() => {
        console.log(message);
      }}
    >
      Click me!
    </button>
  );
}

export default Button;
