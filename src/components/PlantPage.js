import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plantData, getNewPlant, handleSearch, onDeletePlant, searchState}) {

  

  return (
    <main>
      <NewPlantForm getNewPlant={getNewPlant} />
      <Search handleSearch={handleSearch} />
      <PlantList plantData={plantData} onDeletePlant={onDeletePlant} searchState={searchState} />
    </main>
  );
}

export default PlantPage;
