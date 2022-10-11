import "../cards/Card.css";

const Card = (props) => {
  const { title, image, desc, id } = props;
  return (
    <div key={id} className="card">
      <h2>{title}</h2>
      <img src={image} alt={id} />
      <p>{desc}</p>
    </div>
  );
};

export default Card;
