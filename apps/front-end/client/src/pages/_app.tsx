import { useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { theme } from '@themes/theme.service'
import { Header } from '@layouts/Header'

// Global css styles
import '@components/custom/catalog/catalog-module.scss'

const Ecommerce = ({ Component, pageProps }: AppProps): any => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles) jssStyles.parentElement?.removeChild(jssStyles)
  }, [])

  return (
    <>
      <Head>
        <title>Ecommerce</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default Ecommerce
