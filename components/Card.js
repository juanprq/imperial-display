import styles from './Card.module.css';

const Card = () => (
  <div className={styles.card}>
    <h3>Glassmorphism is awesome</h3>

    <p>
      A modern CSS UI library based on the glassmorphism design principles that
      will help you quickly design and build beautiful websites and
      applications.
    </p>
    <a href="https://ui.glass">Read more</a>
  </div>
);

export default Card;
