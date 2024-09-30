import React from "react";

const MealDetails = ({ params }) => {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}> Meal Details </h1>
      <p style={{ color: "white", textAlign: "center" }}>{params.mealId}</p>
    </main>
  );
};

export default MealDetails;
