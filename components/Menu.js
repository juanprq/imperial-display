import AnchorLink from 'react-anchor-link-smooth-scroll';
import styles from './Menu.module.css';

const Menu = () => (
  <nav className={styles.menu}>
    <AnchorLink href="#standings">Posiciones</AnchorLink>
    <AnchorLink href="#games">Resultados</AnchorLink>
    <AnchorLink href="#calendar">Calendario</AnchorLink>
  </nav>
);

export default Menu;
