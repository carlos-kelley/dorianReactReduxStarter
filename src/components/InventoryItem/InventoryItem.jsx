import { useState } from 'react';
import './InventoryItem.css';
import{ useDispatch, useSelector } from 'react-redux';

function InventoryItem( props ){
    // template hook
    const [ show, setShow ] = useState( true );
    const testReducer = useSelector( store => store.testReducer );
    const dispatch = useDispatch();

    const handleClick = () =>{
        setShow( !show );
    }

    const changeReducerText = ()=>{
        console.log( 'in changeReducerText:', props.myItem.description );
        dispatch( { type: 'CHANGE_TEXT', payload: props.myItem.description } );
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
            <p onClick={ changeReducerText }>{ testReducer }</p>
        </div>
    );
}

export default InventoryItem;