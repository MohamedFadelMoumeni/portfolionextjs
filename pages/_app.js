import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import ReactGA from 'react-ga';


if(typeof window !== "undefined"){
  ReactGA.initialize('G-PMZSXKPHNH');
ReactGA.pageview(window.location.pathname + window.location.search);
}

function MyApp({ Component, pageProps }) {
  return (
   <>
 
    
   
    <ThemeProvider theme={theme}>
  <Component {...pageProps} />
  </ThemeProvider>
   </>
  )
}

export default MyApp
