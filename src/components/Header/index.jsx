import PropTypes from 'prop-types';
import { MdClose } from "react-icons/md";
import brand from "../../assets/brand.svg";
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import { Search } from "../../components/Search";
import { Button } from "../../components/Button";
import { FiMenu, FiLogOut } from "react-icons/fi";
import brandAdmin from "../../assets/brand-admin.svg";
import brandMobile from "../../assets/brand-mobile.svg";
import { Container, Menu, Brand, Logout } from "./styles";

export function Header({ isAdmin, isDisabled, isMenuOpen, setIsMenuOpen, setSearch }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const logo = isAdmin ? (isDesktop ? brandAdmin : brandMobile) : brand;
  
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleFavorites() {
    navigate("/favorites");
  }

  function handleNew() {
    navigate("/new");
  }

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container>
      {!isDesktop && (
        <Menu>
          {!isMenuOpen ?
            <FiMenu className="fi-menu-icon" onClick={() => setIsMenuOpen(true)} /> :
            <>
              <MdClose size={"1.8rem"} onClick={() => setIsMenuOpen(false)} />
              <span>Menu</span>
            </>
          }
        </Menu>
      )}

      {(isDesktop || !isMenuOpen) && (
        <>
          <Brand>
            <img src={logo} alt="Logo" />
          </Brand>

          {isDesktop && <Search isDisabled={isDisabled} setSearch={setSearch} />}

          {isDesktop &&
            <button className="favorites" onClick={handleFavorites}>Meus favoritos</button>
          }

          {isAdmin ? 
            (isDesktop && <Button className="new" title="Novo prato" onClick={handleNew} />) :
            <Button className="orders" title={isDesktop ? "Pedidos" : undefined} isCustomer orderCount={0} />
          }

          {isDesktop &&
            <Logout onClick={handleSignOut}>
              <FiLogOut size={"3.2rem"} />
            </Logout>
          }
        </>
      )}
    </Container>
  );
}

Header.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool,
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
};