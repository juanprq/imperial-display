import Layout from '../components/Layout';
import Rules from '../components/Rules';
import Standings from '../components/Standings';

import players from '../lib/players.json';

const Home = ({ players }) => (
  <Layout title="Torneo Twilight Imperium - AXM 2021">
    <Rules />
    <Standings players={players} />
  </Layout>
);

export const getStaticProps = () => {
  return {
    props: {
      players,
    },
  };
};

export default Home;
