import React from 'react'
import Cards from "./Cards"
const Main = (props) => {
    return ( 
        <div className='d-flex mx-3 my-5 flex-wrap'>

{props.Movies.filter(e=>e.rating>=props.Rating && e.name.toUpperCase().includes(props.Keyword.toUpperCase())).map(el => <Cards key={el.id} Movie={el}/>) }           
             
       </div>
     );
}
 
export default Main;