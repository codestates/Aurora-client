import 'antd/dist/antd.css'
import PropTypes from 'prop-types'
import Head from 'next/head'

import wrapper from '../store/configureStore'

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

export default wrapper.withRedux(Aurora)
