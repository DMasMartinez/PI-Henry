import { ADD_FAV,REMOVE_FAV } from "./action-type"

export const add_fav =(char) =>{
    return {type: ADD_FAV,
            payload:char}

}
export const remove_fav = (id) =>{
    return {
        type:REMOVE_FAV,
        payload:id
    }
}

