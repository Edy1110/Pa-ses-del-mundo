import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid, faHeart as faHeartRegular, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ onSearch, favorites }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" className={styles.link}>Inicio</Link>
      </div>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link to="/favorites" className={styles.link}>
            Favoritos ({favorites.length})
          </Link>
        </li>
        <li className={styles.menuItem}>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Buscar país..."
              value={searchTerm}
              onChange={handleSearchChange}
              className={styles.searchInput}
            />
            <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
          </div>
        </li>
      </ul>
      <div className={styles.mobileMenu}>
        <Link to="/" className={styles.mobileLink}>Inicio</Link>
        <Link to="/favorites" className={styles.mobileLink}>Favoritos ({favorites.length})</Link>
        <div className={styles.mobileSearchBar}>
          <input
            type="text"
            placeholder="Buscar país..."
            value={searchTerm}
            onChange={handleSearchChange}
            className={styles.mobileSearchInput}
          />
          <FontAwesomeIcon icon={faSearch} className={styles.mobileSearchIcon} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;