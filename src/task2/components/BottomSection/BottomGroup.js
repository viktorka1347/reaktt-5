import PropTypes from 'prop-types';

/**
 * Тематическая группа в нижней части страницы
 */

function BottomGroup(props) {
  const { title, link, icon, children } = props;

  return (
    <div className="BottomGroup">
      <a href={link}>
        <div>
          <h3>{title}</h3>
          {icon && <img src={process.env.PUBLIC_URL + '/images/' + icon} height="30px" alt="no icon" />}
        </div>
        {children}
      </a>
    </div>
  );
}

BottomGroup.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string
};

export default BottomGroup;