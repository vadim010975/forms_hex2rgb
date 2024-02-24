import { useState } from 'react';
import Container from "./Container"

const hex2rgb = (c) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
  return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
}

const Converter = () => {

  const [state, setState] = useState({
    colorHex: "#ffffff",
    rgb: "",
  });

  const onChange = (event) => {
    const { target } = event;
    const { value } = target;
    const rgb = hex2rgb(value);
    if (value.length < 7) {
      setState({
        colorHex: "#ffffff",
        rgb: "",
    });
      return;
    }
    if (rgb) {
      setState({
          colorHex: value,
          rgb,
      });
      return;
    }
    setState({
      colorHex: "#e74c3c",
      rgb: "Ошибка!"
    });
  }

  return (
    <>
      <Container color={state.colorHex} onChange={onChange} rgb={state.rgb} />
    </>
  )
}

export default Converter