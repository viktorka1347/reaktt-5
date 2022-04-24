import PropTypes from 'prop-types';

/**
 * Строка примера под формой поиска
 */

function SearchExample(props) {
  const { example } = props;

  return (
    <p className="SearchExample">
      <span>Найдётся всё. Например, </span>
      <span>{example}</span>
    </p>
  );
}

SearchExample.propTypes = {
  example: PropTypes.string.isRequired
};

export default SearchExample;