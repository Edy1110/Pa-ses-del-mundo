import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountryCard from '../components/CountryCard';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [initialCountries, setInitialCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setInitialCountries(data.slice(0, 2));
      })
      .catch(error => console.error('Error fetching initial countries:', error));
  }, []);

  return (
    <div className={styles.container}>
      <h2>Lista de Países</h2>
      <div className={styles.grid}>
        {initialCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <Link to="/quiz" className={styles.quizButton}>
          Pone a prueba tus habilidades
        </Link>
      </div>
    </div>
  );
};

export default HomePage;