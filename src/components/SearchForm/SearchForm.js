import React from 'react';
import './SearchForm.css';

function SearchForm(props) {
  const inputRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onSearchArticle(inputRef.current.value);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input className="search-form__input" ref={inputRef} placeholder="Введите тему новости" required />
      <button className="search-form__button search-form__text tap-highlight" type="submit">Искать</button>
    </form>
  );
}

export default SearchForm;
