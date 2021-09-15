import Link from 'next/link'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export async function getServerSideProps() {
  const posts = [
    {
      title: 'titulo 2123123',
      blurb: 'blu123123rb2',
      pid: '2234'
    }
  ]

  return { props: { posts } }
}

function Blog({ posts }) {
  return (
    <>
      <main>
        <Header />
        <h1 className="title">SSR page</h1>

        <div>
          {posts &&
            posts.map((post) => (
              <Link
                href="blog/[pid]"
                as={`/blog/${post.pid}`}
                key={`${post.pid}`}
              >
                <a className="card">
                  <h3>{post.title} &rarr;</h3>
                  <p>{post.blurb}</p>
                </a>
              </Link>
            ))}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Blog
