import Document, { Html, Head, Main, NextScript } from "next/document";
import Footer from "./Footer";
import Header from "./Header";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Header />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
