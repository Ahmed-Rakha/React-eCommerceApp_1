function CardDescription(props) {
  return (
    <>
      <div className="display-details">
        <h4>Product Name:</h4>
        <span> {props.title}</span>
      </div>

      <div className="display-details">
        <h4>Description:</h4>
        <span> {props.description}</span>
      </div>

      <div className="display-details">
        <h4>Category: </h4>
        <span>{props.category}</span>
      </div>

      <div className="display-details">
        <h4>Rating: </h4>
        <span>{props.rating} ⭐️</span>
      </div>
      <div className="display-details">
        <h4>Price: </h4>
        <span>${props.price} </span>
      </div>
    </>
  );
}

export default CardDescription;
