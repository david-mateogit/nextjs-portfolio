import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='description' content='A Portfolio Site' />
          <meta charset='utf-8' />
          <meta name='robots' content='noindex, nofollow' />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
            integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=='
            crossorigin='anonymous'
          ></link>
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap'
            rel='stylesheet'
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>
          {`
            body {
              font-family: 'Lato', sans-serif;
            }
          `}
        </style>
      </Html>
    );
  }
}

export default MyDocument;
