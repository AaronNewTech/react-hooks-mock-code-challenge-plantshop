import React, { useState } from "react";

function PlantCard({ plant, onDeletePlant }) {
  const [inStock, setStock] = useState(true);
  const [editPriceState, setEditPriceState] = useState(false);
  const [editNumState, setEditNumState] = useState(0);

  function changeStock() {
    setStock(false);
  }

  const handleDelete = () => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(onDeletePlant(plant.id));
  };
  let editPlant = {
    price: "",
  };
  function handleChange(e) {
    const updatedPrice = Number(e.target.value);
    // num = updatedPrice;
    editPlant.price = updatedPrice;
    console.log(editPlant.price);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target.value);
    
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
      .then(setEditPriceState(true))
      
    console.log(editPriceState);
  }
  // let num;
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
