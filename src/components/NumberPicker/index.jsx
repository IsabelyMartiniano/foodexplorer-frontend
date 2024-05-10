import PropTypes from 'prop-types';
import { Container } from "./styles";
import { FiMinus, FiPlus } from "react-icons/fi";

export function NumberPicker({ number, setNumber }) {
  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const decrementNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  return (
    <Container>
      <button onClick={decrementNumber}><FiMinus /></button>
      <span>{number < 10 ? `0${number}` : number}</span>
      <button onClick={incrementNumber}><FiPlus /></button>
    </Container>
  );
}

NumberPicker.propTypes = {
  number: PropTypes.number.isRequired, 
  setNumber: PropTypes.func.isRequired, 
};