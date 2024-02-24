import PropTypes from 'prop-types';
import Input from "./Input";
import ColorInRGB from "./ColorInRGB";
import { Block } from "jsxstyle";

const Container = ({ color, onChange, rgb }) => {

  return (
    <Block backgroundColor={color} display="flex" className="container">
      <div className="wrapper">
        <Input onChange={onChange} />
        <ColorInRGB rgb={rgb} />
      </div>
    </Block>
  )
}

Container.propTypes = {
  color: PropTypes.string,
  onChange: PropTypes.func,
  rgb: PropTypes.string,
}

export default Container