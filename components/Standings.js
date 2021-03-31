import styles from './Standings.module.css';

const Standings = ({ players }) => (
  <div>
    <h2>Standings</h2>
    {players.map((player) => (
      <div key={player.nick}>{player.nick}</div>
    ))}
  </div>
);

export default Standings;
