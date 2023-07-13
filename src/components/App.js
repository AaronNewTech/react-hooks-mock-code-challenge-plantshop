import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plantData, setPlantData] = useState([]);
  const [searchState, setSearchState] = useState([]);

  // this function is called when the page loads and it will fetch the list of plants from the database
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((resp) => resp.json())
      .then((data) => {
        setPlantData(data);
        setSearchState(data);
      });
  }, []);

  // this function is called when a new plant is added to the list of plants which will repopulate the list of plants
  function getNewPlant(newPlant) {
    setSearchState([...plantData, newPlant]);
  }

  // this function is called when the user types in the search box and it will filter the list of plants based on the search terms
  const handleSearch = (searchTerm) => {
    const filter = plantData.filter((plant) =>
      // this line puts the searchterms and listings in lowercase which can be compared so it can be filtered in the line above
      plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchState(filter);
    // console.log(searchState)
  };

  // this function is called when a plant is deleted from the list of plants which will repopulate the list of plants
  const onDeletePlant = (plantId) => {
    const updatedPlants = plantData.filter((plant) => plant.id !== plantId);
    setPlantData(updatedPlants);
    setSearchState(updatedPlants);
    console.log(plantId);
  };

  return (
    <div className="app">
      <Header />
      <PlantPage
        plantData={searchState}
        getNewPlant={getNewPlant}
        handleSearch={handleSearch}
        onDeletePlant={onDeletePlant}
        searchState={searchState}
      />
    </div>
  );
}

export default App;
