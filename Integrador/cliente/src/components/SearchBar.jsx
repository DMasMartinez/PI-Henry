import { useState } from "react";


export default function SearchBar(props) {
   const {onSearch} = props;
   const [id,setId] = useState("")
   function handlechange(event){
      return (
         setId(event.target.value)
      )
   }
   return (
      <div>
         <input type='search' onChange={handlechange} />
         <button onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}
