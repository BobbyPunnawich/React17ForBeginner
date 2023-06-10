import PropTypes, { symbol } from "prop-types";
import "./Item.css";

const Item = (props) => {
  //Destructuring
  const { title, amount } = props;
  const status = amount < 0 ? "expense" : "income";
  const symbol = amount < 0 ? "-" : "+";

  return (
    <li className={status}>
      {title}{" "}
      <span>
        {symbol} {Math.abs(amount)}
      </span>
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Item;
