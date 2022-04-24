import PropTypes from 'prop-types';
import SearchMenu from './Search/SearchMenu';
import SearchForm from './Search/SearchForm';
import SearchExample from './Search/SearchExample';

/**
 * Центральная часть страницы с формой поиска
 */

function Search(props) {
  const { example } = props.data;
  
  return (
    <div className="Search">
      <img src={process.env.PUBLIC_URL + '/images/yandex.jpg'} width="100px" alt="yandex" />
      <div>
        <SearchMenu />
        <SearchForm />
        <SearchExample example={example}/>
      </div>
    </div>
  );
}

Search.propTypes = {
  data: PropTypes.object.isRequired
};

export default Search;