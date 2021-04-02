import styles from './Menu.module.css';

const Menu = () => (
  <nav className={styles.menu}>
    <a href="#standings">Posiciones</a>
    <a href="#games">Resultados</a>
    <a href="#calendar">Calendario</a>
  </nav>
);

export default Menu;
