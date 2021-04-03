import styles from './Standings.module.css';

const Standings = ({ data }) => (
  <div>
    <h2 id="standings">Posiciones</h2>
    <div className={styles.container}>
      {data.map((player, index) => (
        <div id={player.nick} key={player.nick} className={styles.player}>
          <div className={styles.avatar}>
            <img src={player.avatar} alt={`${player.nick}_avatar`} />
          </div>
          <div className={styles.name}>
            {player.name} <span className={styles.desc}>{player.alias}</span>
          </div>
          <div className={styles.points}>
            <div>
              {index + 1} <span className={styles.desc}>{player.points} pts</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Standings;
