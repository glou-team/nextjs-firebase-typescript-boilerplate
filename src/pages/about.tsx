import Header from '../components/Header'
import Footer from '../components/Footer'

export async function getStaticProps() {
  return {
    props: {
      data: 'Data from some external API fetched at build-time'
    }
  }
}

function About({ data }) {
  return (
    <>
      <main>
        <Header />
        <h1>About - SSG</h1>
        <h3>{data}</h3>
      </main>
      <Footer />
    </>
  )
}

export default About
