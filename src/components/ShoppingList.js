import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSearch, setSearch] = useState('');
  const [array, setArray] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = array.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  
  function handleSearch(event) {
    setSearch(event.target.value)
  }

  const searched = itemsToDisplay.filter((item) => {
    if (isSearch === "") {
      return true
    }
    if (item.name.toLowerCase().includes(isSearch.toLowerCase()) ) {
      return true;
    }
    return false
  })
  
  function onItemFormSubmit(newItem) {
    setArray([...array, newItem])
  }
  
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter search={isSearch} onCategoryChange={handleCategoryChange} onSearchChange={handleSearch}/>
      <ul className="Items">
        {searched.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
