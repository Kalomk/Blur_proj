import Search from 'components/Search/Search';
import './Actions.scss';
import { ClarityNotificationOutlineBadged } from 'components/Svgr';

const Actions = () => {
  return (
    <div className="actions">
      <Search />
      <div className="actions__btns">
        <ClarityNotificationOutlineBadged />
      </div>
    </div>
  );
};

export default Actions;
