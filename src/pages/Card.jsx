import React from "react";

const Card = ({ title, description, color, emoji, transform, textColor, }) => {
  const cardStyle = {
    backgroundColor: color,
    transform: transform || "",
    color: textColor || "",
  };

  return (
    <div className="card" style={cardStyle}>
      <h2>{emoji}</h2>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Card;


// import React from "react";

// const Card = ({ title, description,color, emoji }) => {
//   const cardStyle = {
//     backgroundColor: color,
//   };
//   return (
//     <div className="card" style={cardStyle}>
//       <h2>{emoji}</h2>
//       <h4>{title}</h4>
//       <p>{description}</p>
//     </div>
//   );
// };

// export default Card;