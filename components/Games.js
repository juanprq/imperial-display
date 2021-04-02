import React from 'react';
import classNames from 'classnames';
import styles from './Games.module.css';

const getMedalPath = (index) => {
  const suffix = index < 3 ? index + 1 : 'p';
  return `/medal-${suffix}.svg`;
};

const Games = ({ data = [] }) => (
  <div>
    <h2 id="games">Resultados</h2>
    <div className={styles.container}>
      {data.map((game, index) => (
        <div key={game.id} className={styles.game}>
          <h3>
            {game.name}{' '}
            <span className={styles.date}>
              {new Date(game.startDate).toLocaleDateString()}
            </span>
          </h3>
          <hr />
          <div className={classNames(styles.result, styles.header)}>
            <div>Nombre</div>
            <div></div>
            <div>Pts</div>
          </div>
          <div>
            {game.results.length === 0 && (
              <div className={styles.emptyMessage}>No hay resultados.</div>
            )}
            {game.results.length > 0 &&
              game.results.map((player, index) => (
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
                  <div>{player.points}</div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Games;
