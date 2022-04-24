import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={styles.card}>
      <h3>{props.title}</h3>
      {props.children}
    </div>
  );
};

export default Card;
