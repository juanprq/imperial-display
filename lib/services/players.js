const process = ({ playersData, gamesData, pointsData }) => {
  const pointsByNick = gamesData.reduce((accum, { results = [] }) => {
    const result = { ...accum };
    results.forEach((nick, index) => {
      if (result[nick]) {
        result[nick] += pointsData[index];
      } else {
        result[nick] = pointsData[index];
      }
    });

    return result;
  }, {});

  return playersData
    .map((player) => ({ ...player, points: pointsByNick[player.nick] || 0 }))
    .sort((a, b) => b.points - a.points);
};

export default { process };
