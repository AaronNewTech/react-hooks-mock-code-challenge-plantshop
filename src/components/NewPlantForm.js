import React from "react";

function NewPlantForm({ getNewPlant }) {
  let newPlant = {
    id: Math.floor(Math.random() * 1000000),
    name: "",
    image: "",
    price: "",
    in_stock: true,
  };

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    newPlant[key] = value;
  }

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
