import PropTypes from 'prop-types';

/**
 * Реклама под формой поиска
 */

function Trailer(props) {
  const { img, link } = props.data;

  return (
    <div className="Trailer">
      <a href={link}>
        <img src={process.env.PUBLIC_URL + '/images/' + img} width="800px" alt="trailer" />
      </a>
    </div>
  );
}

Trailer.propTypes = {
  data: PropTypes.object
};

export default Trailer;