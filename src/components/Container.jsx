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

export default Container