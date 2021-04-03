import Head from 'next/Head';
import Layout from '../components/Layout';
import Rules from '../components/Rules';
import Standings from '../components/Standings';
import Games from '../components/Games';
import Calendar from '../components/Calendar';

import gamesService from '../lib/services/games';
import playersService from '../lib/services/players';
import playersData from '../lib/data/players.json';
import gamesData from '../lib/data/games.json';
import pointsData from '../lib/data/points.json';
import datesData from '../lib/data/dates.json';

const Home = ({ players, games, dates, points }) => (
  <Layout title="Torneo Twilight Imperium - AXM 2021">
    <Head>
      <title>Torneo Twilight Imperium - AXM 2021</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Rules points={points} />
    <Standings data={players} />
    <Games data={games} />
    <Calendar data={dates} />
  </Layout>
);

export const getStaticProps = () => {
  return {
    props: {
      players: playersService.process({ gamesData, playersData, pointsData }),
      games: gamesService.process({
        gamesData,
        playersData,
        pointsData,
        datesData,
      }),
      dates: datesData,
      points: pointsData,
    },
  };
};

export default Home;
