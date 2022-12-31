
import classes from "./CardItem.module.css";

const CardItem = (props) => {
  const { pic, type, text } = props.data;

  return (
    <div className={classes.cardItem}>
      <img src={pic} alt="logo" />
      <p>{text}</p>
    </div>
  );
};

export default CardItem;
