import './QuartzBackground.scss';

const QuartzBackground = ({ children }) => {
  return (
    <div className="test">
      <div className="background_background__3Oeal">
        {[...new Array(14)].map((_, id) => (
          <span key={id}></span>
        ))}
        {children}
      </div>
    </div>
  );
};
export default QuartzBackground;
