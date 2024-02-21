const Input = ({ onChange }) => {

  return (
    <form>
      <input type="text" name='input' onChange={onChange} className="input" />
    </form>
  );
}

export default Input;