/**
 * Собственно форма поиска
 */

function SearchForm() {

  return (
    <form className="SearchForm">
      <input type="text" name="search" />
      <button type="submit">Найти</button>
    </form>
  );
}

export default SearchForm;