import PropTypes from 'prop-types'
import Head from 'next/head'

const Aurora = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Aurora</title>
      </Head>
      <Component />
    </>
  )
}

Aurora.prototype = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object
}

export default Aurora
