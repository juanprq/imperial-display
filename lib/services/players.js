const process = ({ playersData, gamesData, pointsData }) => {
  // first, calculate all points by nick in the games data
  // map the players to add the points
  // sort the players by points in reverse order
  const pointsByNick = gamesData.reduce((accum, { results }) => {
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
    .map((player) => ({ ...player, points: pointsByNick[player.nick] }))
    .sort((a, b) => b.points - a.points);
};

export default { process };
