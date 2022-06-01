import { useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';

function Inventory( props ){
    // template hook
    const [ hook, setHook ] = useState( null );
     
    return(
        <div>
            <h2>Inventory</h2>
                {
                    props.inventory.map( item =>( 
                        <InventoryItem myItem={ item }/>
                    ) )
                }
        </div>
    );
}

export default Inventory;