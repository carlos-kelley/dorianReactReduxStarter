import Items from '../Items/Items';

function Body(){

    let itemsArray = [ 
      {
        description: 'drop of blood',
        color: 'red',
        size: 'tiny'
      }, 
      {
        description: 'cup of blood',
        color: 'red',
        size: 'small'
      }, 
      {
        description: 'blueberry',
        color: 'blue',
        size: 'tiny'
      }
    ]


    return(
        <div className="body">
          <p>
            hello world from ReactJS!
          </p>
          <Items items={ itemsArray }/>
        </div>
    );
}

export default Body;