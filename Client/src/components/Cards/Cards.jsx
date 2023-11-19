import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters, onClose} = props; // Characters es un arreglo.
  return (
    <div className={styles.wrapperCards}>
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
