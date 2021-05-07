import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html lang='ko'>
        <Head>
          <link
            rel='stylesheet'
            href='https://use.fontawesome.com/releases/v5.6.3/css/all.css'
            integrity='sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/'
            crossOrigin='anonymous'
          />
          <link rel='shortcut icon' href='/static/favicon.ico' type='image/x-icon' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
