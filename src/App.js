import Header from "./layout/Header"
import Content from "./layout/Content"
import Footer from "./layout/Footer"
import { useState } from "react"
import AddItem from "./layout/AddItem"
function App() {
  const [items, setItems] = useState([
    { id: 1, checked: true, item: 'Item 1' },
    { id: 2, checked: false, item: "Item 2" },
    { id: 3, checked: false, item: "Item 3" }
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
  }
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id != id);
    setItems(listItems)
  }
  const [newItem, setNewItem] = useState('')
  const handleSubmit = (e) => {

  }
  return (
    <div className="App">
      <Header title="Groceries List" />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />

      <Content items={items} setItems={setItems} handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
