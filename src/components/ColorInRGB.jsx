import PropTypes from 'prop-types';

const ColorInRGB = ({ rgb }) => {

  return (
    <div className="rgb">{rgb}
    </div>
  )
}

ColorInRGB.propTypes = {
  rgb: PropTypes.string,
}

export default ColorInRGB