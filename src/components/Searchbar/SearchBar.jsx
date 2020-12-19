import { useState } from 'react';
import propTypes from 'prop-types';
import QuantityPerPage from '../QuantityPerPage';
import s from './SearchBar.module.css';

export default function SearchBar({ onChangeQuantity, onSubmitForm }) {
  const [query, setQuery] = useState('');

  const handleSubmitForm = e => {
    e.preventDefault();

    if (!query) return;
    onSubmitForm(query);
    setQuery('');
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={e => handleSubmitForm(e)}>
        <button type="submit" className={s.SearchForm_button}>
          <span className={s.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={s.SearchForm_input}
          type="text"
          autoComplete="off"
          value={query}
          autoFocus
          placeholder="Search images and photos"
          onChange={e => setQuery(e.target.value)}
        />
      </form>
      <QuantityPerPage onChange={onChangeQuantity} />
    </header>
  );
}

SearchBar.propTypes = {
  onSubmitForm: propTypes.func.isRequired,
  onChangeQuantity: propTypes.func.isRequired,
};
