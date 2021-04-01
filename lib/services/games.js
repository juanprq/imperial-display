const process = ({ gamesData, playersData, pointsData }) => {
  const playersByNick = playersData.reduce(
    (accum, player) => ({
      ...accum,
      [player.nick]: player,
    }),
    {}
  );

  return gamesData
    .map((game) => ({
      ...game,
      results: game.results.map((nick, index) => ({
        ...playersByNick[nick],
        points: pointsData[index],
      })),
    }))
    .sort((a, b) => {
      const dateA = Date.parse(a.date, 'dd/MM/yyyy');
      const dateB = Date.parse(b.date, 'dd/MM/yyyy');

      return dateB - dateA;
    });
};

export default { process };
