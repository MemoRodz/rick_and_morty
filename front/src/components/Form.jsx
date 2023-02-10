import React from "react";
import { Link } from 'react-router-dom';
import styles from "./Form.module.css";
import validate from "./validate";

export default function Form(props) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({
    username: "",
    password: ""
  });

  function handleInputChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.login(userData);
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className={styles.container}>
          <div className={styles.form_group}>
            <label>Usuario</label>
            <input
              className={errors.username && styles.warning}
              type="text"
              name="username"
              placeholder="Introduce tu usuario."
              onChange={(e) => handleInputChange(e)}
            ></input>
            <p className={styles.danger}>{errors.username}</p>
          </div>
          <div className={styles.form_group}>
            <label>Password</label>
            <input
              type="text"
              name="password"
              placeholder="Introduce Password"
              onChange={(e) => handleInputChange(e)}
            ></input>
            <p className={styles.danger}>{errors.password}</p>
          </div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
