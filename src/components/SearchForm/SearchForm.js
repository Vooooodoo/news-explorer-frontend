import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <form className="search-form">
      <input className="search-form__input" placeholder="Введите тему новости" required />
      <button className="search-form__button search-form__text tap-highlight" type="submit">Искать</button>
    </form>
  );
}

export default SearchForm;
