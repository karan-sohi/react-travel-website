import Card from "./Card";
import CardItem from "./CardItem";

const DUMMYDATA = [
  {
    key: 'm1',
    pic: "link",
    type: "adventure",
    text: "explore the hidden waterfall deep inside the amazon jungle",
  },
  {
    key: 'm2',
    pic: "link",
    type: "Luxury",
    text: "Travel through the islands of Ball in a private Cruise",
  },
];

const AllCards = (props) => {
  return DUMMYDATA.map((card) => (
    <CardItem data={card}></CardItem>
  ));
};

export default AllCards;
