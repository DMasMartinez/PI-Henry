
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { add_fav,remove_fav } from "../redux/action";
import { useState } from "react";

export default function Card(props) {
   // const {id,name,status,species,gender,origin,image,onClose}=props
   // const [isfav,setIsfav]=useState(false)
   // const dispatch = useDispatch()
   // const handlerFunction = () =>{
   //    if (isfav){
   //       setIsfav(!isfav)
   //       dispatch(remove_fav(props.id))
   //    }else{
   //       setIsfav(!isfav)
   //       dispatch(add_fav(props))
   //    }
   // }
   return (
      <div id={props.id}>
         {/* {isfav ? (
         <button onClick={handlerFunction}>❤️</button>
         ):(
         <button onClick={handlerFunction}>🤍</button>
         )} */}
         <button onClick={()=>props.onClose(props.id)}>X</button>
         
         {/* <h2>{id}</h2> */}
         <Link to={`/detail/${props.id}`}>
            <h2>{props.name}</h2>
         </Link>
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin.name}</h2>
         <img src={props.image} alt={props.name} />
      </div>
   );
}
