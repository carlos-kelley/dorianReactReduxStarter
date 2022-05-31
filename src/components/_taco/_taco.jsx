import { useState } from 'react';

function _taco( props ){
    // template hook
    const [ hook, setHook ] = useState( null );
     
    return(
        <div>
            <h2>_taco</h2>
            <p>Props: { JSON.stringify( props ) }</p>
        </div>
    );
}

export default _taco;