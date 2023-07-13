import React from "react";

function NewPlantForm({ getNewPlant }) {
  // this is our object that will hold our new plant data to be sent to the database
  let newPlant = {
    id: Math.floor(Math.random() * 1000000),
    name: "",
    image: "",
    price: "",
    in_stock: true,
  };

  // this function will handle the change of the input fields and allows us to assign our values to the newPlant object dynamically which will negate the slow change of state changes. This is also a faster way to assign the values to the newPlant object using name selector that we can get values from the input fields
  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    newPlant[key] = value;
  }

  // this function will handle the submit of the form that will be sent to the database using a POST request
  function handleSubmit(e) {
    e.preventDefault();
    getNewPlant(newPlant);

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((plant) => console.log(plant));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
