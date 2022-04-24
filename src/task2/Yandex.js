import PropTypes from 'prop-types';
import TopSection from './components/TopSection';
import Search from './components/Search';
import Trailer from './components/Trailer';
import BottomSection from './components/BottomSection';

/**
 * Родительский компонент страницы
 */

function Yandex(props) {
  const { top, search, trailer, bottom } = props.data;

  return (
    <div className="Yandex">
      <TopSection data={top} />
      <Search data={search} />
      <Trailer data={trailer} />
      <BottomSection data={bottom} />
    </div>
  );
}

Yandex.propTypes = {
  data: PropTypes.object.isRequired
};

export default Yandex;