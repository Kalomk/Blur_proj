import { useState, useEffect } from 'react';
import './GetArtistDetails.scss';

const GetArtistDetails = ({ isHovered }) => {
  const [localMousePos, setLocalMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e) => {
      setLocalMousePos({
        x: e.pageX,
        y: e.pageY,
      });
    };
    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.addEventListener('mousemove', mouseMove);
    };
  }, [setLocalMousePos, localMousePos]);

  return (
    <>
      {isHovered && (
        <div
          className="mus-art-card"
          style={{
            position: 'absolute',
            top: localMousePos.y + 195,
            left: localMousePos.x + 20,
            transform: 'translate(-50%,-50%)',
          }}
        >
          <img
            src="https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/5f/f4/9b/5ff49b8c-d0bb-3748-14f4-131edfb332ce/first_love_3000.jpg/400x400cc.jpg"
            alt="artist_img"
          />
          <h4>Gorillaz</h4>
          <h5>Laconic trip-hop beats and sizzling electronics from Albarn and co.</h5>
          <div className="details">
            <div className="genres">
              <span>Alternative</span>
            </div>
          </div>
          <div className="buttons">
            <button>Subscribe</button>
            <button>See info</button>
          </div>
        </div>
      )}
    </>
  );
};

export default GetArtistDetails;
