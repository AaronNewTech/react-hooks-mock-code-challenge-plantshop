import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantData, onDeletePlant, searchState }) {
  // console.log(plantData)

  const displayPlants = plantData.map((plant) => (
    <PlantCard plant={plant} key={plant.id} onDeletePlant={onDeletePlant} />
  ));

  return <ul className="cards">{displayPlants}</ul>;
}

export default PlantList;
