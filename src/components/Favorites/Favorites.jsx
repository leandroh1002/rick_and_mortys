import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import Card from '../Card/Card';
import styles from "./Favorites.module.css";
import { filterCards, orderCards } from "../../redux/actions";

function Favorites(props) {
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  const handleOrder=(e) =>{
    setAux(!aux);
    dispatch(orderCards(e.target.value))
  }

  const handleFilter = (e) =>{
    dispatch(filterCards(e.target.value))
  }

    const {myFavorites} = props;
    return (
    <div>
      <div className={styles.divfilter}>
        <select onChange={handleOrder}>
        <option value="A" >Ascendente</option>
        <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="Male" >Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select></div>
        <div className={styles.wrapperCards}>
          {myFavorites.map((character) => {
            return (
              <Card
                key={character.id}
                id={character.id}
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                //origin={character.origin.name}
                image={character.image}
                // onClose={onClose}
              />
            );
          })}
          </div>
        </div>
      );
}

const mapStateToProps = (state) =>{
    return{myFavorites: state.myFavorites};
}

export default connect(mapStateToProps, null)(Favorites)