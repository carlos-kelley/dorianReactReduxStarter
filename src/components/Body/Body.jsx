import { useState } from 'react';
import Inventory from '../Inventory/Inventory';


function Body(){
  let [inventoryList, setInventoryList] = useState( [] );
  const [currentSize, setCurrentSize] = useState( 'tiny' );
  const [currentColor, setCurrentColor] = useState( 'red' );
  const [currentDescription, setCurrentDescription] = useState( '' );

  const addItem = () =>{
    const newItem = {
      color: currentColor,
      size: currentSize,
      description: currentDescription
    }
    console.log( 'in addItem:', newItem );
    // avoid mutation by using "spread" 
    setInventoryList( [ ...inventoryList, newItem ] );
  }

  const changeColor = () =>{
   setCurrentColor( event.target.value );
  }

  const changeDescription = () =>{
    setCurrentDescription( event.target.value );
  }

  const changeSize = () =>{
    setCurrentSize( event.target.value );
  }
    return(
        <div className="body">
          <select onChange={ changeSize }>
            <option>tiny</option>
            <option>small</option>
            <option>medium</option>
            <option>large</option>
            <option>huge</option>
          </select>
          <select onChange={ changeColor }>
            <option>red</option>
            <option>orange</option>
            <option>yellow</option>
            <option>green</option>
            <option>blue</option>
            <option>purple</option>
          </select>
          <input onChange={ changeDescription } type="text" placeholder='description'></input>
          <button onClick={ addItem }>Add Item</button>
          <Inventory inventory={ inventoryList }/>
        </div>
    );
}

export default Body;