import type { NextPage } from 'next';
import Head from 'next/head';
import useAuth from '../hooks/useAuth';
import { Movie } from '../type';
import request from '../utils/request';
import Banner from './component/Banner';
import Header from './component/Header';
import Row from './component/Row';

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}

const Home: NextPage<Props> = (props) => {
  const { user, loading } = useAuth();
  if (loading) return null;

  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={props.netflixOriginals} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={props.trendingNow} />
          <Row title="Top Rated" movies={props.topRated} />
          <Row title="Action Thrillers" movies={props.actionMovies} />
          {/* My List */}
          <Row title="Comedies" movies={props.comedyMovies} />
          <Row title="Scary Movies" movies={props.horrorMovies} />
          <Row title="Romance Movies" movies={props.romanceMovies} />
          <Row title="Documentaries" movies={props.documentaries} />
        </section>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries
  ] = await Promise.all([
    fetch(request.fetchNetflixOriginals).then((res) => res.json()),
    fetch(request.fetchTrending).then((res) => res.json()),
    fetch(request.fetchTopRated).then((res) => res.json()),
    fetch(request.fetchActionMovies).then((res) => res.json()),
    fetch(request.fetchComedyMovies).then((res) => res.json()),
    fetch(request.fetchHorrorMovies).then((res) => res.json()),
    fetch(request.fetchRomanceMovies).then((res) => res.json()),
    fetch(request.fetchDocumentaries).then((res) => res.json())
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results
    }
  };
};
