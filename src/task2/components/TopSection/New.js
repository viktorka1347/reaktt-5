import PropTypes from 'prop-types';

/**
 * Ссылка на новость
 */

function New(props) {
  const { icon, text, link } = props;

  return (
    <li className="New">
      <img src={process.env.PUBLIC_URL + '/images/' + icon} width="20px" alt="no icon" />
      <a href={link}>{text}</a>
    </li>
  );
}

New.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default New;