import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';
//Q: Why Link?
//Although anchor tag does seem to work as it redirects out page between href links, BUT, what it's doing is refreshing each page while redirecting which means we lose our current changes that we made on the page. (use href -> to)

function AboutIcon() {
  return (
    <div className='about-link'>
      <Link to='/about'>
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIcon;
