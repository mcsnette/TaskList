import "./App.css";
import Header from "./Header";
import Form from "./Form";
import ItemList from "./ItemList";
import Tracker from "./Tracker";
import React, { useState } from "react";
import Footer from "./Footer";

function App() {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "name")
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "isChecked")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.isChecked) - Number(b.isChecked));

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmed) {
      setItems((items) => items.filter((item) => item.id !== id));
    }
  }

  function handleChecked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to clear?");
    if (confirmed) {
      setItems([]);
    }
  }

  function handleEditItem(updatedItem) {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  }

  return (
    <div className="App">
      <div className="left-side">
        <Header items={items} sortBy={sortBy} setSortBy={setSortBy} />
        <Form onAddItem={handleAddItems} />
        <ItemList
          items={sortedItems}
          onDeleteItem={handleDeleteItem}
          onCheckedItem={handleChecked}
          onEditItem={handleEditItem}
        />
        <button className="btn-clear" onClick={handleClearList}>
          Clear
        </button>
        <Tracker items={items} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
