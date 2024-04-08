import { useState } from "react";

function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault(); //para mawala yung reload
    if (!name) return; //if walang name, return nothing
    const newItem = { name, quantity, isChecked: false, id: Date.now() };
    console.log(newItem);
    setName("");
    setQuantity(1);
    //handleAddItem(newItem);
    onAddItem(newItem);
  }

  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <select
          className="check-style"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          // can be onChange={(e) => setQuantity(+e.target.value)}
          //but it should be readable so we used Number hehe
          //state is like a memory of the component :) we store it here
        >
          {/* <option value={1}>1</option> */}
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          className="input-box"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your exercise"
        ></input>
        <button className="btn-add">Add</button>
      </form>
    </div>
  );
}

export default Form;
