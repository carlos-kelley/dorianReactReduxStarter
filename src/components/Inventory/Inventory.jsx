import { useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';
// step 4 - import react redux stuff to let us access store
import { useDispatch, useSelector } from 'react-redux';

function Inventory( props ){
    // template hook
    const [ hook, setHook ] = useState( null );
    // step 5 connect to a reducer in store
    const testReducer = useSelector( store => store.testReducer );
    const dispatch = useDispatch();
     
    const emptyText =()=>{
        dispatch( { type: 'CHANGE_TEXT', payload: '' } );
    }

    return(
        <div>
            <h2 onClick={ emptyText }>Inventory</h2>
                {
                    props.inventory.map( item =>( 
                        <InventoryItem myItem={ item }/>
                    ) )
                }
                <h3>{ testReducer }</h3>
        </div>
    );
}

export default Inventory;