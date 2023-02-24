import './Sidebar.scss';
import {
  AkarIconsHeart,
  BytesizeHome,
  CarbonMediaLibrary,
  CodiconFolderLibrary,
  BytesizeSettings,
  IcSharpLogout,
} from 'components/Svgr';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar__wrapper wrapper-sidebar">
        <div className="wrapper-sidebar__content">
          <div className="wrapper-sidebar__logo">
            <svg width="320" height="100" viewBox="0 0 320 100" className="css-1j8o68f">
              <defs id="SvgjsDefs2076"></defs>
              <g
                id="SvgjsG2077"
                transform="matrix(1.1111111111111112,0,0,1.1111111111111112,-5.555555555555555,-5.555555555555555)"
                fill="#222831"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#222831"
                  d="M95,52c0-12.871-5.692-24.431-14.682-32.318C72.431,10.692,60.871,5,48,5C24.29,5,5,24.29,5,48  c0,12.868,5.69,24.426,14.677,32.313C27.564,89.306,39.126,95,52,95c0.084,0,0.166-0.006,0.25-0.006S52.416,95,52.5,95  C75.972,95,95,75.972,95,52.5c0-0.084-0.006-0.166-0.006-0.25S95,52.084,95,52z M21.828,73.371  c-4.245-5.978-6.77-13.259-6.822-21.121c0.135-20.511,16.732-37.109,37.244-37.244c7.862,0.052,15.144,2.577,21.121,6.822  C80.224,28.473,84.5,37.758,84.5,48c0,20.126-16.374,36.5-36.5,36.5C37.758,84.5,28.473,80.224,21.828,73.371z M6,48  C6,24.841,24.841,6,48,6c9.858,0,18.926,3.422,26.1,9.13C67.637,11.242,60.076,9,52,9C28.29,9,9,28.29,9,52  c0,8.074,2.241,15.633,6.127,22.095C9.421,66.923,6,57.856,6,48z M52,89c-10.08,0-19.227-4.055-25.905-10.615  C32.269,82.854,39.838,85.5,48,85.5c20.678,0,37.5-16.822,37.5-37.5c0-8.162-2.646-15.731-7.115-21.905  C84.945,32.773,89,41.92,89,52C89,72.402,72.402,89,52,89z"
                ></path>
              </g>
              <g
                id="SvgjsG2078"
                transform="matrix(2.5879912483120657,0,0,2.5879912483120657,115.65217391304348,-17.434777672494082)"
                fill="#0070f4"
              >
                <path d="M24.2 29.2 c0 1.16 -0.08 7.28 -4.68 10.08 c-1.4 0.84 -3.04 1.24 -4.68 1.24 c-2.12 0 -3.6 -0.68 -4.32 -1.16 c-0.36 -0.28 -0.6 -0.56 -0.88 -0.88 l0 1.52 l-7.96 0 l0 -28.24 l8.2 0 l0.04 8.96 c0.36 -0.36 0.64 -0.6 1.08 -0.92 c1.2 -0.8 2.68 -1.12 4.16 -1.12 c2.56 0 4.72 0.88 6.44 2.76 c1.24 1.36 2.6 3.6 2.6 7.76 z M16.08 29.6 c0 -1.28 -0.12 -2.76 -0.88 -3.84 c-0.72 -1.04 -1.84 -1.2 -2.28 -1.2 c-0.32 0 -1.08 0.08 -1.76 0.6 c-1.32 1.08 -1.48 2.88 -1.48 4.44 c0 1.44 0.16 3.36 1.36 4.32 c0.24 0.2 0.92 0.64 1.84 0.64 c0.36 0 1.32 -0.12 2.08 -0.88 c0.68 -0.72 1.12 -2 1.12 -4.08 z M34.92 40 l-8.28 0 l0 -28.24 l8.28 0 l0 28.24 z M60.76 40 l-7.84 0 l0 -3.04 c-0.28 0.56 -0.48 1.08 -1.4 1.84 c-0.96 0.8 -2.56 1.72 -5.44 1.72 c-0.76 0 -3.44 -0.04 -5.48 -1.76 c-0.56 -0.48 -1.52 -1.52 -2 -3.36 c-0.24 -0.84 -0.36 -1.72 -0.36 -3.52 l0 -12.6 l8.28 0 l0 11.28 c0 0.96 -0.08 3.36 3 3.36 c0.8 0 1.6 -0.2 2.12 -0.72 c0.96 -1 0.84 -2.76 0.84 -2.96 l0 -10.96 l8.28 0 l0 20.72 z M78.96 25.8 c-0.4 -0.04 -0.8 -0.08 -1.2 -0.08 c-0.64 -0.04 -4.16 -0.24 -5.16 2.56 c-0.24 0.68 -0.24 1.24 -0.24 1.96 l0 9.76 l-8.2 0 l0 -20.72 l7.92 0 l0 1.8 c0.4 -0.36 0.68 -0.6 1.12 -0.88 c1.84 -1.28 3.6 -1.36 5.76 -1.36 l0 6.96 z"></path>
              </g>
            </svg>
          </div>
          <div className="wrapper-sidebar__menu menu-sidebar">
            <ul className="menu-sidebar__list">
              <li className="menu-sidebar__item active">
                <BytesizeHome />
                <span>Home</span>
              </li>
              <li className="menu-sidebar__item">
                <CodiconFolderLibrary />
                <span>Library</span>
              </li>
              <li className="menu-sidebar__item">
                <CarbonMediaLibrary />
                <span>Albums</span>
              </li>
              <li className="menu-sidebar__item">
                <AkarIconsHeart />
                <span>Favorites</span>
              </li>
            </ul>
          </div>
          <ul className="wrapper-sidebar__utils sidebar-utils">
            <li className="sidebar-utils__settings">
              {' '}
              <BytesizeSettings />
              <span>Settings</span>
            </li>
            <li className="sidebar-utils__logIn">
              <IcSharpLogout />
              <span>Log Out</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
