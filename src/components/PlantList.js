import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantData, onDeletePlant, searchState }) {
  // this is a function that returns a list of plants based on the searchState mapping a list of plants
  const displayPlants = plantData.map((plant) => (
    <PlantCard plant={plant} key={plant.id} onDeletePlant={onDeletePlant} />
  ));

  return <ul className="cards">{displayPlants}</ul>;
}

export default PlantList;
