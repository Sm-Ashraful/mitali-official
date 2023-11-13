import "../styles/globals.css";
import Layout from "../components/Layout";
import { StateProvider } from "../context/StateProvider";
import reducer, { initialState } from "../context/reducer";

export default function App({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  );
}
