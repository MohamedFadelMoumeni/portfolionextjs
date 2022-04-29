import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import Script from 'next/script'



function MyApp({ Component, pageProps }) {
  return (
   <>
    <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'G-PMZSXKPHNH', 'auto');
          ga('send', 'pageview');
        `}
      </Script>
      <Script
        src="https://www.google-analytics.com/analytics.js"
        strategy="afterInteractive"
      />
    
   
    <ThemeProvider theme={theme}>
  <Component {...pageProps} />
  </ThemeProvider>
   </>
  )
}

export default MyApp
