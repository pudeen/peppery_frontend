import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import NavBarSticky from './NavBarSticky.js';
import './CSS/Sticky.css';

export default function NavBar() {
  const [isSticky, setSticky] = React.useState(false);
  const ref = React.useRef(null);

  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    } 
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
        <NavBarSticky />
      </div>
    </Fragment>
  );
}