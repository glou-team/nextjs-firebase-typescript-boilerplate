import { useRouter } from 'next/router'
import Error from 'next/error'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export async function getStaticPaths() {
  // by returning an empty list, we are forcing each page to be rendered on request.
  // these pages will be rendered on first request.
  // the resultant .html and .json will be cached by the CDN, with the following cache headers
  // cache-control: public,max-age=31536000,stale-while-revalidate
  // this means that the user will receive the pre-computed page on each request
  // and then each page will be recomputed behind the scenes. This means our Cloud Function will
  // be called per request increasing our costs.

  // firebase hosting deployment should invalidate these cached values
  // additionally, a new `next build` will create a new Build ID which is
  // used in the path for the returned .json data file.
  return {
    paths: [],
    fallback: true
  }
}

// This function gets called at on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps({ params }) {
  const pid = params.pid
  // Call an external API endpoint to get posts.

  return { props: { pid } }
}

// posts will be populated by getStaticProps() at either:
// - build time
// - first request
function Post({ pid }) {
  const router = useRouter()

  if (!router.isFallback && !pid) {
    return <Error statusCode={404} title="No Blog Post with the provided ID" />
  }

  if (router.isFallback) {
    return (
      <main>
        <div>Loading...</div>
      </main>
    )
  }

  return (
    <>
      <main>
        <Header />
        <h1>pid: {pid}</h1>
      </main>

      <Footer />
    </>
  )
}

export default Post
