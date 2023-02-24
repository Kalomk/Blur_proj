import './Search.scss';
import { CarbonSearch } from 'components/Svgr';

const Search = () => {
  return (
    <div className="search">
      <form className="search__form">
        <CarbonSearch />
        <input
          type="text"
          className="search__input"
          placeholder="Search, Songs, Genre, Album, Artists... "
        />
      </form>
    </div>
  );
};

export default Search;
