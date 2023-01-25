import PropTypes from 'prop-types'; //impt

function Header({ text, bgColor, txtColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: txtColor,
  };

  return (
    <header style={headerStyle}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  );
}

// nameOfComponent.defaultProps
Header.defaultProps = {
  text: 'Feedback page',
  bgColor: '#152219',
  txtColor: 'beige',
};

// propTypes - making our app more robust
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  txtColor: PropTypes.string,
};

export default Header;
