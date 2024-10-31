'use client';
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import axios from "axios";

export default function Home() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, password };
    const response = await axios.post('http://localhost:4000/', formData, {withCredentials: true});
    console.log(response.data);
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Psevdo registratsiya</h1>
        <br />
        <br />
        <br />
        <h2>Name:</h2>
        <input type="text" value={name} onChange={handleNameChange}/>
        <br />
        <h2>Password:</h2>
        <input type="password" value={password} onChange={handlePasswordChange}/>
        <br />
        <br />
        <button type="submit" className={styles.button}>Add</button>
      </form>
    </div>
  );
}
