import Layout from '../components/Layout';
import Rules from '../components/Rules';
import Standings from '../components/Standings';
import Games from '../components/Games';

import gamesService from '../lib/services/games';
import playersService from '../lib/services/players';
import playersData from '../lib/data/players.json';
import gamesData from '../lib/data/games.json';
import pointsData from '../lib/data/points.json';

const Home = ({ players, games }) => (
  <Layout title="Torneo Twilight Imperium - AXM 2021">
    <Rules />
    <Standings data={players} />
    <Games data={games} />
  </Layout>
);

export const getStaticProps = () => {
  return {
    props: {
      players: playersService.process({ gamesData, playersData, pointsData }),
      games: gamesService.process({ gamesData, playersData, pointsData }),
    },
  };
};

export default Home;
