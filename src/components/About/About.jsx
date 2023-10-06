import React from 'react'
import styles from "./About.module.css";
import html from "../../assets/html-5.png";
import css from "../../assets/css-3.png";
import js from "../../assets/js.png";
import react from "../../assets/atom.png";
import redux from "../../assets/redux-logo-60.png";
import perfil from "../../assets/perfil.jpg";

export default function About() {
  return (
    <div className={styles.divfondo}>
      <div className={styles.divfondo1}>
        <div className={styles.divcontent}>
          <img className={styles.imagen} src={perfil} alt="perfil-leandro" />
          <p className={styles.parrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur ullam, earum, modi dolore repellat cum ducimus illo alias molestias labore maiores dolores id ipsum maxime beatae tempore quisquam repellendus!</p>
        </div>
        
        
        <div className={styles.divcontent2}>
          <h2>Tecnologias utilizadas</h2>
          <div>
          <img className={styles.imgs} src={html} alt="HTML"/>
          <img className={styles.imgs} src={css} alt="CSS"/>
          <img className={styles.imgs} src={js} alt="JS"/>
          <img className={styles.imgs} src={react} alt="REACT"/>
          <img className={styles.imgs} src={redux} alt="REDUX"/>
          </div>
        </div>
      </div>

    </div>
  )
}