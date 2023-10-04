import { ADD_FAV, REMOVE_FAV } from "./actionstypes";

export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character,
    };
};

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id,
    };
};
