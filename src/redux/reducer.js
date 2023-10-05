import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actionstypes";

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state= initialState, {type, payload}) =>{
switch(type){
    case ADD_FAV:
        //let copy1 = state.myFavorites;
        let copy1 = state.allCharacters;
        copy1.push(payload)
        return{
            //...state, myFavorites: copy1
            ...state, myFavorites: copy1, allCharacters: copy1
        }
    case REMOVE_FAV:
        let copy2 = state.myFavorites.filter((char) => {
            return char.id !== Number(payload);
        });
        return{
            ...state, myFavorites: copy2, allCharacters: copy2
        }
    case FILTER:
        let copy3 = state.allCharacters.filter((genero) =>{
            return genero.gender === payload;
        })
        return {
            ...state, myFavorites: copy3, allCharacters: copy3
        }
    case ORDER:
        let copy4 = state.allCharacters;
        if (payload === "A") {
            copy4.sort((a, b) => a.id - b.id); // Ordenar de menor a mayor por ID.
          } else if (payload === "D") {
            copy4.sort((a, b) => b.id - a.id); // Ordenar de mayor a menor por ID.
          }
        return{
            ...state, myFavorites: copy4, allCharacters: copy4
        }

    default: 
        return{
            ...state
        };
    }   
}

export default rootReducer;