import React, { useState } from "react";

function EditForm({ item, onSaveEdit }) {
  const [editedName, setEditedName] = useState(item.name);
  const [editedQuantity, setEditedQuantity] = useState(item.quantity);

  function handleSubmit(e) {
    e.preventDefault();
    // Validate if name is not empty
    if (editedName.trim() === "") {
      alert("Please enter a name for the item.");
      return;
    }
    onSaveEdit({
      ...item,
      name: editedName,
      quantity: editedQuantity,
    });
  }

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <select
        value={editedQuantity}
        onChange={(e) => setEditedQuantity(parseInt(e.target.value))}
      >
        {[...Array(20)].map((_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={editedName}
        onChange={(e) => setEditedName(e.target.value)}
      />
      <button className="btn-save" type="submit">
        Save
      </button>
    </form>
  );
}

export default EditForm;
