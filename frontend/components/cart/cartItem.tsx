import Button from "@mui/material/Button";
import { ICartItem } from "../../types/cart";
import styles from "../../assets/styles/components/cart.module.css";

type Props = {
  item: ICartItem;
  addToCart: (clickedItem: ICartItem) => void;
  removeFromCart: (id: string) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <div className={styles.cartContainer}>
    <div>
      <h3>{item.name}</h3>
      <div className="information">
        <p>Price: $ {item.price}</p>
        <p>Total: $ {(item.price + item.amount).toFixed(2)}</p>
      </div>
      <div className="buttons">
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        > - </Button>
        <p>{item.amount}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}
        > + </Button>
      </div>
    </div>
    <img src={item.image} alt={item.name} />
  </div>
);

export default CartItem;
