import React from 'react'
import { useState } from 'react'
import './add.css'

function Add(props) {

  const { items, setItems } = props

  const [itemData, setItemData] = useState({
    itemName: "",
    itemCost: "",
    itemImage: "",
    itemScore: "0"
  });
  

  const handleChange = (event) => {

  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setItems(itemData)
  }
  
  return (
    <main>
      <form className='item-submit-form' onChange={handleSubmit}>
        <h2>Add An Item</h2>

        <label htmlFor="itemName">Item Name</label>
        <input 
          id="itemName" 
          name="itemName" 
          type="text"
          onChange={handleChange}
          // value={itemName}
            required 
          />
        
        <label htmlFor='itemCost'>Item Cost</label>
        <input 
          id='itemCost'
          name='itemCost'
          type="number"
          onChange={handleChange}
          // value={itemCost}
            required
        />

        <label htmlFor='itemImage'>Image URL</label>
        <input 
          id='itemImage'
          name='itemImage'
          type='text'
          onChange={handleChange}
            required
        />

        <div className="actions-section">
          <button 
            className="button blue" 
            type="submit"
            >
          Add Item
          </button>
        </div>

      </form>
    </main>
  )
}

export default Add