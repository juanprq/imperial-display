import styles from './Standings.module.css';

const Standings = ({ players }) => (
  <div>
    <h2>Standings</h2>
    <div className={styles.container}>
      {players.map((player) => (
        <div key={player.nick} className={styles.player}>
          <div className={styles.avatar}>
            <img src={player.avatar} alt={`${player.nick}_avatar`} />
          </div>
          <div>
            <div>
              {player.name} <span>{player.alias}</span>
            </div>
            <div>
              15
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Standings;
