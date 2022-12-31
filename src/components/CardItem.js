const CardItem = props => {
    const {pic, type, text} = props.data;

    return (
        <h1>{text}</h1>
    )
};

export default CardItem;