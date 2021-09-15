import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate - Firebase hosting, typescript, nextJS</title>
        <meta
          name="description"
          content="A simple project starter to work with T_appcript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
