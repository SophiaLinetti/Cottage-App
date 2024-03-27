import BurgerMenu from "@/components/BurgerMenu";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <BurgerMenu/>
      <Component {...pageProps} />
    </>
  );
}
