import { useState } from 'react';
import './InventoryItem.css'

function InventoryItem( props ){
    // template hook
    const [ show, setShow ] = useState( true );
     
    const handleClick = () =>{
        setShow( !show );
    }

    return(
        <div className='listItem'>
            {
                // ternary operator
                show?
                <p onClick={ handleClick } className={ props.myItem.color }><strong>{ props.myItem.description }</strong></p>
                :
                <p onClick={ handleClick }>{ props.myItem.size }, { props.myItem.color }</p>
            }
        </div>
    );
}

export default InventoryItem;