export const AnimalCard = ({ name, image, description }) => {
  return (
    <div className="animal-card">
      <img src={image} alt={name} width={300} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};
