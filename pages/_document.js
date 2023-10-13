import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='stylesheet' type='text/css' href='/font/flaticon.css' />
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;700&family=Nunito+Sans:wght@300&family=Roboto:wght@300;400;500;700&display=swap'
            rel='stylesheet'
          />
          <link rel='shortcut icon' href='/images/favicon.png' />
        </Head>
        <body>
          <Main />
          {/* Here we will mount our modal portal */}
          <div id='modal' />
          <NextScript />
        </body>
      </Html>
    )
  }
}
