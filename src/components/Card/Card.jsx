import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import styles from "./Card.module.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react"; 
import PATHROUTES from "../../helpers/PathRoutes.helper";



function Card(props) {
  const {id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites} = props;
  const [isFav, setIsFav] = useState(false);

  const {pathname} = useLocation()

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props); //si isFav esta en true, quiere decir que esta agregado a fav, entonces ejecuto el removeFav. y luego seteafav para cambiar el estado
    setIsFav(!isFav)
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.header}>
      {
      isFav ? (
      <button onClick={handleFavorite}>❤️</button>
      ) : (
      <button onClick={handleFavorite}>🤍</button>
      )
      }
        <img className={styles.imgperfil} src={image} alt={name} />
      </div>

      <div >
        <div className={styles.contenedorNombreEstado}/* className={name ? styles.name : styles.noname} */>
          <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
          <h2>{status}</h2>
        </div>
        <div className={styles.containerh2}>
          <h2>{species}</h2>
          <h2>{gender}</h2>
          {/* <h2>{origin}</h2> */}
        </div>
      </div>
        <div className={styles.wrapperButton}>
          {pathname !== PATHROUTES.FAVORITES && (<button className={styles.close} onClick={() => onClose(id)}>
            X
          </button>)}
        </div>
    </div>
  );

}

const mapDispatchToProps = (dispatch)=>{
  return{
    addFav: (character)=> {
      dispatch(addFav(character))
    },
    removeFav: (id)=> {
      dispatch(removeFav(id))
    },
  };
};

const mapStatToProps = (state) => {
  return{myFavorites: state.myFavorites};
};

export default connect(mapStatToProps, mapDispatchToProps)(Card);