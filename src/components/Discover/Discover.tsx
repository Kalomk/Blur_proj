import Gallery from 'components/Gallery/Gallery';

const Discover = () => {
  return (
    <>
      <Gallery pageSize={4} id={1} title={'Top Popular'} />
      <Gallery pageSize={4} id={2} title={'Top Hip-Hop'} />
    </>
  );
};

export default Discover;
