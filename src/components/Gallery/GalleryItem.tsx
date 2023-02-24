import { Group5 } from 'components/Svgr';

interface CardProps {
  images: { coverart: string };
  title: string;
  subtitle: string;
}

const GalleryItem: React.FC<CardProps> = ({ images, title, subtitle }) => {
  return (
    <li className="mus-card">
      <div className="mus-card__cover">
        <img src={images?.coverart} alt="background" />
        <Group5 />
      </div>
      <div className="mus-card__des-content">
        <ul className="mus-card__des-list">
          <li className="mus-card__name">{title}</li>
          <li className="mus-card__title">{subtitle}</li>
        </ul>
      </div>
    </li>
  );
};

export default GalleryItem;
