import styles from './Rules.module.css';

const Rules = ({ points }) => (
  <div className={styles.container}>
    <div className={styles.rule}>
      El torneo de Twilight Imperium AXM - 2021 se jugará a partir de abril el
      primer sábado de cada mes hasta Diciembre (Ver el calendario de eventos),
      cualquier persona podrá jugar sin costo alguno y tampoco se tendrá que
      comprometer a continuar jugando, jugará las partidas que la persona desea
      o pueda jugar, los cupos están disponibles a quien primero los pida (el
      juego cuenta con 6 cupos por juego), recordar que el juego tiene una
      duración aproximada de 6 horas por partida, por lo que para participar hay
      que tener la disposición de la partida completa.
    </div>
    <div className={styles.rule}>
      Por cada partida jugada a los participantes se les otorgarán puntos de
      acuerdo a la posición en la que finalizaron, estos puntos se acumularan
      hasta la última partida y quien más puntos tenga cuando el evento finalice
      será el ganador.
      <div className={styles.points}>
        <div className={styles.header}>
          <div className={styles.position}>Posición</div>
          <div className={styles.equivalence}>Pts</div>
        </div>
        {points.map((point, index) => (
          <div key={point} className={styles.point}>
            <div className={styles.position}>{index + 1}</div>
            <div className={styles.equivalence}>{point}</div>
          </div>
        ))}
      </div>
    </div>
    <div className={styles.rule}>
      Para el ganador del gran torneo de Twilight Imperium recibirá un juego de
      mesa de su elección (preferiblemente uno bueno, nada de esas maricadas de
      raiders of the north sea o catan) de un valor máximo de 150.000 COP, el
      ganador le informará al comité organizador cual juego quiere y se le
      entregará luego cuando llegue (para pedirlo en amazon). luego celbraremos
      con buñuelos, natilla y esas vainas...
    </div>
  </div>
);

export default Rules;
