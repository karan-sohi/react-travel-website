import Card from "./Card";
import CardItem from "./CardItem";
import pic1 from "../images/img-1.jpg";
import pic2 from "../images/img-2.jpg";
import pic3 from "../images/img-3.jpg";
import pic4 from '../images/img-4.jpg';
import pic5 from '../images/img-5.jpg';
import classes from "./AllCards.module.css";

const DUMMYDATA = [
  {
    key: "m1",
    pic: pic1,
    type: "adventure",
    text: "explore the hidden waterfall deep inside the amazon jungle",
  },
  {
    key: "m2",
    pic: pic2,
    type: "Luxury",
    text: "Travel through the islands of Ball in a private Cruise",
  },
  {
    key: "m3",
    pic: pic3,
    type: "Mystery",
    text: "Set salt in the Atlantic ocean visiting Unchartered Waters",
  },
  {
    key: "m4",
    pic: pic4,
    type: "Adventure",
    text: "Experience Football on top of the Himalayan Mountains",
  },
  {
    key: "m5",
    pic: pic5,
    type: "Adventure",
    text: "Ride through the Sahara Desert on a guided camel tour",
  }
];

const AllCards = (props) => {
  return (
    <div className={classes.cards}>
      <h1>Check Out these Epic destinations</h1>
      <div className={classes.allCards}>
        {DUMMYDATA.map((card) => (
          <CardItem data={card}></CardItem>
        ))}
      </div>
    </div>
  );
};

export default AllCards;
