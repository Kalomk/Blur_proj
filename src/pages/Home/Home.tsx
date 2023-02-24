import Actions from 'components/Actions/Actions';
import ArtistRandomizer from 'components/ArtistRandomizer/ArtistRandomizer';
import Discover from 'components/Discover/Discover';
import GetArtistDetails from 'components/GetArtistDetails/GetArtistDetails';
import RightMenu from 'components/RightMenu/RightMenu';
import Sidebar from 'components/Sidebar/Sidebar';
import './Home.scss';
import { useState } from 'react';
const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="homePage">
      <Sidebar />
      <main className="main-content">
        <div className="main-content__discover-part">
          <Actions />
          <ArtistRandomizer />
          <Discover />
        </div>
        <div className="main-content__rightMenu">
          <RightMenu setHovered={setIsHovered} />
        </div>
      </main>
      <GetArtistDetails isHovered={isHovered} />
    </div>
  );
};
export default Home;
