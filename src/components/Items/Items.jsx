import { useState } from 'react';

function Items( props ){
    // template hook
    const [ hook, setHook ] = useState( null );
      
    return(
        <div>
            <h2>Items</h2>
            <p>Props: { JSON.stringify( props ) }</p>
            <h3>our first map list</h3>
            <ul>
                { props.items.map( item => (<li>{ item.description }</li>) ) }
            </ul>
        </div>
    );
}

export default Items;