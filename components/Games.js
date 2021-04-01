import React from 'react';
import classNames from 'classnames';
import styles from './Games.module.css';

const getMedalPath = (index) => {
  const suffix = index < 3 ? index + 1 : 'p';
  return `/medal-${suffix}.svg`;
};

const Games = ({ data = [] }) => (
  <div>
    <h2>Juegos</h2>
    {data.length === 0 && <div>Aun no se ha jugado el primer juego.</div>}
    {data.length > 0 && (
      <div className={styles.container}>
        {data.map((game, index) => (
          <div key={game.id} className={styles.game}>
            <h3>
              {game.name} <span className={styles.date}>{game.date}</span>
            </h3>
            <hr />
            <div className={classNames(styles.result, styles.header)}>
              <div>Nombre</div>
              <div></div>
              <div>Pts</div>
            </div>
            <div className={styles.content}>
              {game.results.map((player, index) => (
                <div
                  key={player.nick}
                  className={classNames(styles.result, styles.row)}
                >
                  <div>{player.alias}</div>
                  <img
                    src={getMedalPath(index)}
                    width="15"
                    alt={`Medal position ${index + 1}`}
                  />
                  <div>15</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default Games;
