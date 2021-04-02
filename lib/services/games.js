const process = ({ gamesData, playersData, pointsData, datesData }) => {
  const playersByNick = playersData.reduce(
    (accum, player) => ({
      ...accum,
      [player.nick]: player,
    }),
    {}
  );
  const gamesById = gamesData.reduce(
    (accum, game) => ({ ...accum, [game.id]: game }),
    {}
  );

  return datesData
    .map((date) => ({ ...date, ...(gamesById[date.id] || {}) }))
    .map((game) => ({
      ...game,
      results: (game.results || []).map((nick, index) => ({
        ...playersByNick[nick],
        points: pointsData[index],
      })),
    }))
    .sort((a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);

      return dateA - dateB;
    });
};

export default { process };
