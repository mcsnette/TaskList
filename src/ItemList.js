import Item from "./Item";

function ItemList({ items, onDeleteItem, onCheckedItem, onEditItem }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <Item
            itemList={item}
            key={item.name}
            onDeleteItem={onDeleteItem}
            onCheckedItem={onCheckedItem}
            onEditItem={onEditItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
