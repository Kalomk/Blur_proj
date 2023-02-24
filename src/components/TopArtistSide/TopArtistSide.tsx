import './TopArtist.scss';
import { CarbonOverflowMenuVertical } from 'components/Svgr';
import { useRef, useEffect, useState } from 'react';
import { useGetTopChartsQuery } from 'redux/shazamCore';

interface SegmentProps {
  index: number;
  height: number;
  title: string;
  subtitle: string;
  images: { coverart: string };
}

function Segment({ index, height, title, subtitle, images }: SegmentProps) {
  const radius = 109.5;
  const angle = 360 / 10;
  const transform = `rotateX(${angle * index}deg) translateZ(${radius}px)`;
  return (
    <>
      <li className="list-items" style={{ transform, height }}>
        <span>{index + 1}</span>
        <img src={images?.coverart} alt="artist__img" className="list-items__img" />
        <div className="list-items__label">
          <div className="list-items__title">
            {title.length > 10 ? title.substring(0, 11) + '...' : title}
          </div>
          <div className="list-items__name">
            {subtitle.length > 10 ? subtitle.substring(0, 11) + '...' : subtitle}
          </div>
        </div>
        <CarbonOverflowMenuVertical />
      </li>
    </>
  );
}

const TopArtist = ({ setHovered }) => {
  const wheelRef = useRef<HTMLUListElement>(null);
  const [segments, setSegments] = useState<JSX.Element[]>([]);
  const { data, isLoading, error } = useGetTopChartsQuery({
    listId: 'genre-global-chart-1',
    locale: 'en-US',
    pageSize: 10,
  });
  useEffect(() => {
    const wheel = wheelRef.current;
    if (!wheel) {
      return;
    }

    const items = data?.tracks.length;
    const diameter = wheel.clientHeight;
    const circumference = Math.PI * diameter;
    const height = circumference / items;

    const newSegments = data?.tracks.map((item, id) => {
      return <Segment setHovered={setHovered} key={id} index={id} height={height} {...item} />;
    });

    setSegments(newSegments);
    wheel.style.transformOrigin = `50% calc(50% + ${height / 2}px)`;
    wheel.style.marginTop = `-${height}px`;
  }, [data]);

  if (isLoading) {
    return <span>...loading</span>;
  }
  if (error) {
    return <span>Error</span>;
  }
  return (
    <div className="charts">
      <h3 className="top-charts__title">Top Charts</h3>
      <ul
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="top-charts"
        ref={wheelRef}
      >
        {segments.map((segment) => segment)}
      </ul>
    </div>
  );
};

export default TopArtist;
