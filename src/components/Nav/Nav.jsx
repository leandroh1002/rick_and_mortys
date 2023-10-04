import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";
import PATHROUTES from "../../helpers/PathRoutes.helper";


export default function Nav(props) {
  const {onSearch} = props;
  return (
    <div>
        <button className={styles.btn}><Link to={PATHROUTES.ABOUT}>About</Link></button>
        <button className={styles.btn}><Link to={PATHROUTES.HOME}>Home</Link></button>
        <button className={styles.btn}><Link to={PATHROUTES.FAVORITES}>Favorites</Link></button>
        <SearchBar onSearch={onSearch} />
    </div>
  );
} 