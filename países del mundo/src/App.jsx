// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryList from './pages/CountryList';
import CountryDetailView from './pages/CountryDetailView';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Favorites from './Favorites/Favorites';
import './App.css';

function App() {
  const [favoriteCountries, setFavoriteCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoriteCountries));
  }, [favoriteCountries]);

  const toggleFavorite = (countryCode) => {
    if (favoriteCountries.includes(countryCode)) {
      setFavoriteCountries(favoriteCountries.filter(code => code !== countryCode));
    } else {
      setFavoriteCountries([...favoriteCountries, countryCode]);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (!term) {
      setFilteredCountries(allCountries.slice(0, 2)); // Muestra los dos iniciales si la búsqueda está vacía
      return;
    }
    const filtered = allCountries.filter(country =>
      country.name.common.toLowerCase().startsWith(term.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setAllCountries(data);
        setFilteredCountries(data.slice(0, 6)); // Muestra los dos iniciales al cargar
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  return (
    <Router>
      <Navbar
        onSearch={handleSearch}
        favorites={favoriteCountries}
      />
      <div className="container">
        <Routes>
          <Route path="/" element={<CountryList countries={filteredCountries} toggleFavorite={toggleFavorite} isFavorite={code => favoriteCountries.includes(code)} />} />
          <Route path="/country/:countryId" element={<CountryDetailView toggleFavorite={toggleFavorite} isFavorite={code => favoriteCountries.includes(code)} />} />
          <Route path="/favorites" element={<Favorites favoriteCountries={favoriteCountries} toggleFavorite={toggleFavorite} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;