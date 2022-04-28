import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Mohamed Fadel Moumeni | Fullstack developer</title>
          <meta name="description" content="Mohamed Fadel Moumeni ,  a self-taught Full Stack JavaScript Developer, UI/UX Designer,Security Pentester." />
        <meta name="keywords" content="Mohamed Fadel Moumeni, Develepement informatique, Software engineer, software developer, developer , javascript, mohamed fadel moumeni, moumeni , portfolio, reactjs " /> 
        <meta httpEquiv="content-language" content="en" />
<meta property="og:description" content="Mohamed Fadel Moumeni ,  a self-taught Full Stack JavaScript Developer, UI/UX Designer,Security Pentester." />
<meta property="og:url" content="https://medfadelmoumeni.com" />
<meta property="og:type" content="website" />
          {this.props.styleTags}

          <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}