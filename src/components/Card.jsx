import React from "react";

// Named export of the Card Component
// export function Card() {
//     return (
//       <div>
//         <img src="https://picsum.photos/200"  />
//         <h2>Lorem, Ipsum.</h2>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, necessitatibus veniam facilis optio rerum consequatur iure omnis velit. Optio, nobis!</p>
//       </div>
//     )
// }

function Card() {
  return (
    // Most attributes are camelCase, and className is used because class is a reserved keyword in JavaScript
    <div className="card">
      <img src="https://picsum.photos/200" />
      {/* This is a Fragment */}
      <>
        <h2>Lorem, Ipsum.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          necessitatibus veniam facilis optio rerum consequatur iure omnis
          velit. Optio, nobis!
        </p>
      </>
    </div>
  );
}

// Default export of the Card component
export default Card;
