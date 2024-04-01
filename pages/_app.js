import Navbar from "@/components/Navbar";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Navbar/>
      <Component {...pageProps} />
    </>
  );
}
