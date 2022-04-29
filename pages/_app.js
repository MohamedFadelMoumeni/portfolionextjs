import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
   <>
 
      <Script
    strategy="lazyOnload"
    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
  />

  <Script id="google-analytics" strategy="lazyOnload">
    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
  </Script>
   
    <ThemeProvider theme={theme}>
  <Component {...pageProps} />
  </ThemeProvider>
   </>
  )
}

export default MyApp
