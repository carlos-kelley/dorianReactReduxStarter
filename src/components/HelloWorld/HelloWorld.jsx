import { useState } from 'react';

function HelloWorld( props ){
    // setting up a "clicks" hook
    const [ clicks, setClicks ] = useState( 0 ); // use state sets up the hook & initial value
    const [ name, setName ] = useState( '' );

    const handleChange = ()=>{
        setName( event.target.value );
    }

    const handleClick = ()=>{
        setClicks( clicks +1 );
    }

    const handleClick2= ()=>{
        props.setAppClicks( 3 );
    }
    return(
        <div>
            <h2>HelloWorld</h2>
            <p><button onClick={ handleClick }>Click</button> Clicks: { clicks  }</p>
            <p><button onClick={ handleClick2 }>App Click</button></p>
            <p><input placeholder='name' onChange={ handleChange }></input> Hello, { name }!</p>
            <p>Props: { JSON.stringify( props ) }</p>
            <p>Tacos are { props.taco }</p>
        </div>
    );
}

export default HelloWorld;