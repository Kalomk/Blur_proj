import { useState } from 'react';
import './BubleText.scss';
type hoverElemType = number | null;

const BubleText = () => {
  const [hoveredTarget, setHoveredTarget] = useState<hoverElemType>();
  const [prevTarget, setPrevTarget] = useState<hoverElemType>();
  const [nextTarget, setNextTarget] = useState<hoverElemType>();
  const PHRASE = "Let Your Fingers Do the Walking Through the Blur. It's the Blur You Can See.";
  const mouseOver = (e) => {
    const currentTarget = e.target;
    const index = parseInt(currentTarget.getAttribute('data-index'), 10);
    const prevIndex = index === 0 ? null : index - 1;
    const nextIndex = index === PHRASE.length - 1 ? null : index + 1;
    const prevElem = prevIndex !== null && index - 1 === prevIndex;
    const nextElem = nextIndex !== null && index + 1 === nextIndex;
    setHoveredTarget(index);
    prevElem && setPrevTarget(prevIndex);
    nextElem && setNextTarget(nextIndex);
  };
  const mouseOut = () => {
    setHoveredTarget(null);
    setPrevTarget(null);
    setNextTarget(null);
  };

  return (
    <>
      {PHRASE.split('').map((letters, idx) => (
        <span
          onMouseEnter={mouseOver}
          onMouseLeave={mouseOut}
          key={idx}
          className={`hovered-char ${hoveredTarget === idx ? 'hovered' : ''} ${
            prevTarget === idx - 2 ? 'hovered-adjacent' : ''
          }
          ${nextTarget === idx + 2 ? 'hovered-adjacent' : ''}`}
          data-index={idx}
        >
          {letters}
        </span>
      ))}
    </>
  );
};

export default BubleText;
