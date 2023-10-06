import React, { useState } from 'react'
import validate from '../../Functions/validation';
import styles from "./Forms.module.css";
import urlImage from '../../assets/morty.jpg';
import eye from '../../assets/eye.png';
import show from '../../assets/show.png';



function Forms(props) {

  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  
  const [errors, setErrors] = useState({
    email:"",
    password:""
  })

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({...userData, [property]: value})// entre corchetes avisa que es una propiedad que va a ir cambiando
    validate({...userData, [property]: value}, setErrors, errors ) // onBlur cuando no estoy en el input onFocus cuando estoy en el input
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.divcontainer}>
      <div className={styles.divform}>
        <form className={styles.form} onSubmit={handleSubmit} action="">
          <label htmlFor="email">Email</label>
            <input className={styles.ipt} type="text" name='email' value={userData.email} onChange={handleChange}/>
            
            {errors.email &&  <p className={styles.prf1}>{errors.email}</p>}
            <label htmlFor="password">Password</label>
            <div className={styles.mostrarpass}>
            <input
                
                type={showPassword ? 'text' : 'password'}
                name='password'
                value={userData.password}
                onChange={handleChange}
              />
            {/* <input type="text" name='password' value={userData.password} onChange={handleChange}/> */}
            <button className={styles.btnpass} type="button" onClick={togglePasswordVisibility}> {showPassword ? (
                <img className={styles.imgs} src={show} alt="Show Password" />
              ) : (
                <img className={styles.imgs} src={eye} alt="Hide Password" />
              )}</button>
          </div>
          {errors.password &&  <p className={styles.prf2}>{errors.password}</p>}
          
          <div className={styles.divbtn}>
          <button className={styles.btn}>SUBMIT</button>


          </div>
        </form>
      </div>
      <div className={styles.seconddesign}>
        <img className={styles.imglogin} src={urlImage} alt="loginimg" />
      </div>
    </div>
  )
}

export default Forms