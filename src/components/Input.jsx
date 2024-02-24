import PropTypes from 'prop-types';

const Input = ({ onChange }) => {

  return (
    <form>
      <input type="text" name='input' onChange={onChange} className="input" />
    </form>
  );
}

Input.propTypes = {
  onChange: PropTypes.func,
}

export default Input;