import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='UTF-8' />
          <link
            rel='preload'
            href='/fonts/Inter-roman.latin.var.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <meta
            name='description'
            content="Hey, I'm Alabhya. Welcome to my portfolio."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
