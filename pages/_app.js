import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import Script from 'next/script'
import { useRouter } from 'next/router';
import { useEffect } from "reactc"



function MyApp({ Component, pageProps }) {

  const router = useRouter()
  
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
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
