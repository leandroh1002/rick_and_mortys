import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import Card from '../Card/Card';
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
        <div >
          <select>
            <option value="A" onChange={handleOrder}>Ascendente</option>
            <option value="D" onChange={handleOrder}>Descendente</option>
          </select>
          <select>
            <option value="Male" onChange={handleFilter}>Male</option>
            <option value="Female" onChange={handleFilter}>Female</option>
            <option value="Genderless" onChange={handleFilter}>Genderless</option>
            <option value="unknown" onChange={handleFilter}>unknown</option>
          </select>
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
      );
}

const mapStateToProps = (state) =>{
    return{myFavorites: state.myFavorites};
}

export default connect(mapStateToProps, null)(Favorites)