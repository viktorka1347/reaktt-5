import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import BottomGroup from './BottomSection/BottomGroup';

/**
 * Нижняя секция страницы с группами ссылок по темам
 */

function BottomSection(props) {
  const { data } = props;

  return (
    <div className="BottomSection">
      {data.map(({ title, link, icon, content }) => 
        <BottomGroup
          key={nanoid()}
          title={title}
          link={link}
          icon={icon}
        >
          {content}
        </BottomGroup>  
      )}
    </div>
  );
}

BottomSection.propTypes = {
  data: PropTypes.array.isRequired
};

export default BottomSection;