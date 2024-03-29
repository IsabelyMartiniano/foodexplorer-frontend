import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem(`@foodExplorer:cart`)) || []
  );
  const [paymentAccept, setPaymentAccept] = useState(
    JSON.parse(localStorage.getItem(`paymentAccept`)) || false
  );
  const [orders, setOrders] = useState([]);

  function handleAddDishToCart(data, quantity, image) {
    try {
      const { id, title, price } = data;
      const priceFormatted = quantity * Number(price.replace(",", "."));

      const order = { id, title, price: priceFormatted, image, quantity };

      const orderExists = cart.some((ord) => ord.title === order.title);
      if (orderExists) {
        return alert("Esse item já está no carrinho");
      }

      setCart((prevState) => [...prevState, order]);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível adicionar o item ao carrinho");
      }
    }

    alert("Item adicionado ao carrinho");
  }

  function handleRemoveDishFromCart(deleted) {
    setCart((prevState) => prevState.filter((item) => item.id !== deleted));
  }

  const total = cart.reduce((value, item) => {
    return value + item.price;
  }, 0);

  async function handleResetCart(id, navigate) {
    localStorage.removeItem(`@foodExplorer:cart`);
    localStorage.removeItem(`paymentAccept`);

    setCart([]);
    setPaymentAccept(false);

    await api.delete(`/carts/${id}`);
    navigate("/");
  }

  useEffect(() => {
    localStorage.setItem(`@foodExplorer:cart`, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem(`paymentAccept`, JSON.stringify(paymentAccept));
  }, [paymentAccept]);

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddDishToCart,
        handleRemoveDishFromCart,
        total: String(total).replace(".", ","),
        paymentAccept,
        setPaymentAccept,
        orders,
        setOrders,
        handleResetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  return context;
}

export { CartProvider, useCart };