import '../styles/globals.css';
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../theme';
import Script from 'next/script'
import { useRouter } from 'next/router';
import { useEffect, useState } from "react"
import {ThemeContext } from '../context/themeswitch';
import { GlobalStyles } from '../styles/globals.styles';




function MyApp({ Component, pageProps }) {
   
  const [themeMode, setTheme] = useState('light');
  const value = {themeMode, setTheme}

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
    
    <ThemeContext.Provider value={value}>
    <ThemeProvider theme={themeMode == "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
  <Component {...pageProps} />
  </ThemeProvider>
  </ThemeContext.Provider>
   </>
  )
}

export default MyApp
