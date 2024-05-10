import PropTypes from 'prop-types';
import { Container } from "./styles";
import { TbReceipt } from "react-icons/tb";
import { useMediaQuery } from 'react-responsive';

export function Button({ title, loading = false, isCustomer, ...rest }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  
  return (
    <Container 
      type="button" 
      disabled={loading} 
      {...rest}
    >
      {isCustomer && <TbReceipt size={"3.2rem"} />}
      {loading ? "Carregando..." : title}
      {isCustomer && <span>{isDesktop ? `(${rest.orderCount})` : rest.orderCount}</span>}
    </Container>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  isCustomer: PropTypes.bool,
  orderCount: PropTypes.number,
};