import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import  Stats  from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }
  function clearList() {
    const result = window.confirm("are you sure you want to delete the list");

    if (result) setItems((items) => []);
  }

  return (
    <div className="app">
      <Logo></Logo>
      <Form onAddItems={handleAddItems}></Form>
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={clearList}
      ></PackingList>
      <Stats items={items}></Stats>
    </div>
  );
}
