import React, { useState } from "react";

function PlantCard({ plant, onDeletePlant }) {
  const [inStock, setStock] = useState(true);
  const [editPriceState, setEditPriceState] = useState(false);
  const [editNumState, setEditNumState] = useState(0);

  // this function will set the stock state to false
  function changeStock() {
    setStock(false);
  }
  // this function is called when the user clicks on the delete button which will delete the plant from the database
  const handleDelete = () => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(onDeletePlant(plant.id));
  };

  // this is the object that will be passed to the database
  let editPlant = {
    price: "",
  };

  // this function is called when the user clicks on the edit button which will edit the plant in the database
  function handleChange(e) {
    const updatedPrice = Number(e.target.value);
    // num = updatedPrice;
    editPlant.price = updatedPrice;
    console.log(editPlant.price);
  }

  // this function is called when the user clicks submit which will send a PATCH request to edit the plant in the database
  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(editPlant),
    })
      .then((res) => res.json())
      .then(setEditNumState(editPlant.price))
      .then(setEditPriceState(true));

    console.log(editPriceState);
  }

  // below we have some ternary logic to determine if the plant is in stock or not or price has changed and will the displayed data accordingly
  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      {editPriceState ? (
        <p>Price: {editNumState}</p>
      ) : (
        <p>Price: {plant.price}</p>
      )}
      {inStock ? (
        <button className="primary" onClick={changeStock}>
          In Stock
        </button>
      ) : (
        <button>Out of Stock</button>
      )}
      <div>
        <button className="primary" onClick={handleDelete}>
          Delete
        </button>
      </div>
      <div>
        <p>Enter New Price</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="image"
            placeholder="Price"
            onChange={handleChange}
          />
          <button className="primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </li>
  );
}

export default PlantCard;
