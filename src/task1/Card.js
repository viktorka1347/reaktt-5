import PropTypes from 'prop-types';

function Card(props) {
  const { title, text, button, children } = props;

  return (
    <div className="card" style={{ width: '18rem' }}>
      {children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={button.link} className="btn btn-primary">{button.text}</a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  button: PropTypes.shape({
    link: PropTypes.string,
    text: PropTypes.string
  }).isRequired,
  children: PropTypes.object
};

export default Card;