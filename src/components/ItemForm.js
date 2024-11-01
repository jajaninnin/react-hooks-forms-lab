import React, {useState} from "react";
import { v4 as uuid } from "uuid";


function ItemForm({onItemFormSubmit}) {
  const initialFD = {
    name: "",
    category: "Produce",
  }
  const [formData, setFormData] = useState(initialFD)
  
  function onSubmit (event) {
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: formData.name,
      category: formData.category,
    }
    onItemFormSubmit(newItem)
    setFormData({...initialFD})
  }
  

  function handleChange(event){
    const key = event.target.name
    return setFormData({...formData, [key]: event.target.value})
  }

  return (
    <form className="NewItem" onSubmit={onSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
