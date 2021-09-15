import Header from '../components/Header'
import Footer from '../components/Footer'

export async function getStaticProps() {
  return {
    props: {
      data: 'Data from some external API fetched at build-time'
    }
  }
}

function Home({ data = '' }) {
  return (
    <main>
      <Header />
      <h1>Home - SSG</h1>
      <h3>{data}</h3>
      <Footer />
    </main>
  )
}

export default Home
