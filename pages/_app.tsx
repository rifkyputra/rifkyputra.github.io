import { AppProps } from '../node_modules/next/app';
import '../styles/global.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App;