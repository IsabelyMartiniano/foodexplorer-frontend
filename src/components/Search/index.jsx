import PropTypes from 'prop-types';
import { Container } from "./styles";
import { FiSearch } from "react-icons/fi";
import { Input } from "../../components/Input";

export function Search({ setSearch, isDisabled }) {
  return (
    <Container>
      <Input
        placeholder="Busque por pratos ou ingredientes"
        icon={FiSearch}
        disabled={isDisabled}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Container>
  );
}

Search.propTypes = {
  setSearch: PropTypes.func.isRequired, 
  isDisabled: PropTypes.bool, 
};
