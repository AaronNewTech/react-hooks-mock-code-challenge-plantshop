import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plantData, setPlantData] = useState([]);
  const [searchState, setSearchState] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((resp) => resp.json())
      .then((data) => {
        setPlantData(data);
        setSearchState(data);
      });
  }, []);

  function getNewPlant(newPlant) {
    // setPlantData([...plantData, newPlant]);
    setSearchState([...plantData, newPlant]);
    console.log(searchState);
  }

  const handleSearch = (searchTerm) => {
    const filter = plantData.filter((plant) =>
      // this line puts the searchterms and listings in lowercase which can be compared so it can be filtered in the line above
      plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchState(filter);
    // console.log(searchState)
  };

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
