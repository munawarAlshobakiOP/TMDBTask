import classes from "./castsCard.module.css"
const CastCard = ({ name, character, image }) => {
  return (
    <div className={classes.card}>
      <img src={image} alt={name} className={classes.image} style={{ width: '180px', height: '270px', objectFit: 'cover', borderRadius: '8px' }} />
      <div className={classes.info}>
        <h3 >{name}</h3>
        <p>{character}</p>
      </div>
    </div>
  );
};

export default CastCard;
