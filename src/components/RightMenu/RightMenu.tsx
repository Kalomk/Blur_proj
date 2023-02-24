import accPic from 'assets/accPic.png';
import { BiArrowRepeat, CilMediaSkipBackward, CilMediaSkipForward, Group5 } from 'components/Svgr';
import TopArtist from 'components/TopArtistSide/TopArtistSide';
import './RightMenu.scss';

const RightMenu = ({ setHovered }) => {
  return (
    <div className="rightmenu">
      <div className="account-menu">
        <h3 className="account-menu__name">Raymond Ihuman</h3>
        <img src={accPic} alt="accPic" />
      </div>
      <TopArtist setHovered={setHovered} />
      <div className="player">
        <h3 className="player-title">Now playing</h3>
        <div className="player__container">
          <div className="player__player-menu menu-player">
            <div className="menu-player__name">Sweetest Pie</div>
            <div className="menu-player__title">Dua Lipa & Megan Thee Stallion</div>
            <div className="menu-player__controller controller">
              <div className="controller__track">
                <input min={1} max={10} value={0} type="range" />
              </div>
              <div className="controller__btns">
                <BiArrowRepeat />
                <CilMediaSkipBackward />
                <Group5 />
                <CilMediaSkipForward />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightMenu;
