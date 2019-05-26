/*import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  RemAdaptation = () => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `var html = document.documentElement,resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';function setHtmlFontSize() {var cliWidth = html.clientWidth;html.style.fontSize = 100 * (cliWidth / 750) + 'px';} setHtmlFontSize(); window.addEventListener(resizeEvt, setHtmlFontSize, false);`,
        }}
      />
    );
  };

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/static/css/normalize.min.css" />
          <link
            rel="shortcut icon"
            href="//cdn-joox.isanook.com/static-inter/favicon.ico"
            type="image/x-icon"
          />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="format-detection" content="telephone=no" />

          {this.RemAdaptation()}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
*/

import Document, { Head, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();

    return {
      ...page,
      styleTags,
    };
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/static/css/normalize.min.css" />
          <link
            rel="shortcut icon"
            href="//cdn-joox.isanook.com/static-inter/favicon.ico"
            type="image/x-icon"
          />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="format-detection" content="telephone=no" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
