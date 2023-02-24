import './Gallery.scss';
import GalleryItem from './GalleryItem';
import { useGetTopChartsQuery } from 'redux/shazamCore';

type GalleryProps = {
  title: string;
  id: number;
  pageSize: number;
};

const Gallery: React.FC<GalleryProps> = ({ title, id, pageSize }) => {
  const { data, isLoading, error } = useGetTopChartsQuery({
    listId: `genre-global-chart-${id}`,
    locale: 'en-US',
    pageSize: pageSize,
  });
  if (isLoading) {
    return <div>...loading</div>;
  }
  if (error) {
    return <div>...error</div>;
  }
  return (
    <div className="main-content__gallery gallery">
      <div className="gallery__release">
        <h3 className="gallery__title">{title}</h3>
        <ul className="gallery__list">
          {data?.tracks.map((item) => (
            <GalleryItem {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Gallery;
