import React, { useContext } from 'react';
import ICartItem from '../../types/cart';
import CartItem from '../../components/cart/cartItem';
import styles from '../../assets/styles/components/cart.module.css';
import { CartItemsContext } from '../../contexts/cartContext';

interface CartProps {
  cartItems: ICartItem[];
  addToCart: (item: ICartItem) => void;
  removeFromCart: (id: string) => void;
}

const Cart: React.FC = () => {
  const calculateTotal = (items: ICartItem) => {
    return items.reduce((ack: number, item) => ack + (item.amount * item.price), 0)
  }

  const { cartItems, addToCart, removeFromCart } = useContext(CartItemsContext);

  return (
    <div className={styles.cartContainer}>
      <h2>Carro de compra</h2>
      {cartItems.length === 0 ? <p>No hay productos en el carro</p> : null}
      {cartItems.map((item: ICartItem) =>
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      )}
      <h2>Total: $ {calculateTotal(cartItems)}</h2>
    </div>
  );
};

export default Cart;