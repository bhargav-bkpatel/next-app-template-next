import "./style.css";

export default function MyApp({ Component: Component, pageProps: pageProps }) {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <Component {...pageProps} />
    </>
  );
}
