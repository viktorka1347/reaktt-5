import PropTypes from 'prop-types';

/**
 * Боковая секция верхней панели
 */

function Side(props) {
  const { icon, title, text, link } = props;

  return (
    <a className="Side" href={link}>
      <img src={process.env.PUBLIC_URL + '/images/' + icon} width="100px" alt="no icon" />
      <h3>{title}</h3>
      <p>{text}</p>
    </a>
  );
}

Side.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Side;