import Header from '../components/molecules/Header'
import Footer from '../components/molecules/Footer'

export async function getServerSideProps() {
  return {
    props: {
      data: 'Server side props'
    }
  }
}

function Home({ data = '' }) {
  return (
    <main>
      <Header />
      <p>{data}</p>
      <Footer message="Powered by Glou" />
    </main>
  )
}

export default Home
