//import Button from "@mui/material/Button";
import { Button } from 'react-bootstrap';
import ICartItem from "../../types/cart";
import styles from "../../assets/styles/components/cart.module.css";
import Image from 'next/image';

type Props = {
  item: ICartItem;
  addToCart: (clickedItem: ICartItem) => void;
  removeFromCart: (id: string) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <div className={styles.cartItemContainer}>
    <div className={styles.cartItem}>
      <h3>{item.name}</h3>
      <div className={styles.information}>
        <p>Precio unitario: $ {item.price}</p>
        <p>Total: $ {(item.price * item.amount)}</p>
      </div>
      <div className={styles.buttons}>
        <Button
          size="small"
          variant="outline-success"
          onClick={() => removeFromCart(item.id)}
        > - </Button>
        <p>{item.amount}</p>
        <Button
          size="small"
          variant="outline-success"
          onClick={() => addToCart(item)}
        > + </Button>
      </div>
    </div>
    <Image className={styles.productImage} src={require('../../assets/images/' + item.image)} width="120px" height="80px"></Image>

  </div>
);

export default CartItem;
