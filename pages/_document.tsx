import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Transforming Resumes & Cover Letters into Life-Winning Potions"
          />
          <meta
            property="og:description"
            content="Transforming Resumes & Cover Letters into Life-Winning Potions"
          />
          <meta property="og:title" content="Career Alchemy" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Career Alchemy" />
          <meta
            name="twitter:description"
            content="Transforming Resumes & Cover Letters into Life-Winning Potions"
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
