import { useState } from "react";
import EditForm from "./EditForm";

function Item({ itemList, onDeleteItem, onCheckedItem, onEditItem }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit(item) {
    setIsEditing(true);
  }

  function handleSaveEdit(updatedItem) {
    onEditItem(updatedItem);
    setIsEditing(false);
  }

  return (
    <div className="list-inner">
      {isEditing ? (
        <EditForm item={itemList} onSaveEdit={handleSaveEdit} />
      ) : (
        <>
          <div
            className={itemList.isChecked ? "list-item-checked" : "list-item"}
          >
            <button
              className="btn-check"
              onClick={() => onCheckedItem(itemList.id)}
            >
              {itemList.isChecked ? (
                <i className="fa fa-check-square-o"></i>
              ) : (
                <i className="fa fa-square-o"></i>
              )}
            </button>
            {itemList.quantity + " " + itemList.name}

            <div className="list-buttons">
              <button className="btn-edit" onClick={() => handleEdit(itemList)}>
                <i className="fa fa-edit"></i>
              </button>
              <button
                className="btn-delete"
                onClick={() => onDeleteItem(itemList.id)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Item;
