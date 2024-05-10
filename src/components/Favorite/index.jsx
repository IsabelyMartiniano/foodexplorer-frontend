import PropTypes from 'prop-types';
import { Container } from "./styles";
import { api } from '../../services/api';

export function Favorite({ data, removeFavorite }) {
  return (
    <Container>
      <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="Imagem do prato." />
      
      <div>
        <h2>{data.name}</h2>
        <button onClick={() => removeFavorite(data.id)}>Remover dos Favoritos</button>
      </div>
    </Container>
  );
}

Favorite.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  removeFavorite: PropTypes.func.isRequired,
};