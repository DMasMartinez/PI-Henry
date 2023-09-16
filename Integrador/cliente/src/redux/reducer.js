import { ADD_FAV,REMOVE_FAV } from "./action-type";


const initial_state = {
    favorites : [],
}
const rootReducer = (state = initial_state,action) => {
    
    
    switch(action.type) {
        case ADD_FAV:
            return {...state,
                favorites:[...state.favorites,action.payload]}
            
        case REMOVE_FAV:
            return {...state,
                favorites:[state.favorites.filter((fav)=>fav.id !== action.payload )]}
            
        default:
            return state

    }

    
}

export default rootReducer