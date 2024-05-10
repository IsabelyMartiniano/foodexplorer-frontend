import PropTypes from 'prop-types';
import { Container } from "./styles";

export function ButtonText({ children, ...rest }) {
  return (
    <Container 
      type="button" 
      {...rest}
    >
      {children}
    </Container>
  );
}

ButtonText.propTypes = {
  children: PropTypes.node.isRequired,
};