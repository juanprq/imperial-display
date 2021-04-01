import styles from './Standings.module.css';

const Standings = ({ data }) => (
  <div>
    <h2>Standings</h2>
    <div className={styles.container}>
      {data.map((player) => (
        <div key={player.nick} className={styles.player}>
          <div className={styles.avatar}>
            <img src={player.avatar} alt={`${player.nick}_avatar`} />
          </div>
          <div className={styles.name}>
            {player.name} <span className={styles.desc}>{player.alias}</span>
          </div>
          <div className={styles.points}>
            <div>
              15 <span className={styles.desc}>pts</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Standings;
