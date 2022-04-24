import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Menu from './TopSection/Menu';
import Clock from './TopSection/Clock';
import New from './TopSection/New';
import Currency from './TopSection/Currency';
import Side from './TopSection/Side';

/**
 * Верхняя часть страницы до формы поиска
 */

function TopSection(props) {
  const { location, news, currency, side } = props.data;
  const { usd, eur, oil } = currency;
  const { icon, title, text, link } = side;
  
  return (
    <div className="TopSection">
      <div>
        <div>
          <Menu text={location.text} link={location.link} />
          <Clock />      
        </div>
        <ul>
          {news.map(({ icon, text, link }) => 
            <New key={nanoid()} icon={icon} text={text} link={link} />
          )}
        </ul>
        <Currency usd={usd} eur={eur} oil={oil}/>
      </div>
      <Side icon={icon} title={title} text={text} link={link} />
    </div>
  );
}

TopSection.propTypes = {
  data: PropTypes.object.isRequired
};

export default TopSection;