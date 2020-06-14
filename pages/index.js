import Head from 'next/head';
import App from '../components/app.js';

const HomePage = () => {
  return (
    <>
      <Head>
        <script src="https://kit.fontawesome.com/3ce7718940.js" crossOrigin="anonymous"></script>
      </Head>
      <div>
        <h1>TabSpot<i className="fas fa-guitar blueGuitar"></i></h1>
        <App />
      </div>
      <footer>Suggested artists powered by <a href="https://tastedive.com/" target="_blank">TasteDive&trade;</a></footer>
    </>
  )
}

export default HomePage;