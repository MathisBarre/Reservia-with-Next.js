import Head from "next/head"
import "../styles/style.css"
import "normalize.css"
import Header from "components/Header.jsx"
import Footer from "components/Footer.jsx"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Reservia - Openclassroom</title>
        <script src="https://kit.fontawesome.com/406da18a0b.js" crossorigin="anonymous" defer ></script>
      </Head>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
