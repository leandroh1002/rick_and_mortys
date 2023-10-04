import styles from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
  const { onSearch } = props; // destrucoring, es para traer una sola props que se le dio al nav
  const [id, setId] = useState([]);

  const handleChange = (event) => {
    setId(event.target.value);
  }

  const handleSubmit = () => {
    onSearch(id);
    setId("");
  };

  return (
    <div className={styles.container}>
      <input type="search" placeholder="Buscar ID" onChange={handleChange} value={id}/>
      <button onClick={handleSubmit}>Agregar</button>
    </div>
  );
}
