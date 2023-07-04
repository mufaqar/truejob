import { SettingsProvider } from '@/context/setting-context'
import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import apolloClient from '../config/client'
import Header2 from '@/components/header/header2'
import Footer2 from '@/components/footer/Footer2'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <SettingsProvider>
          <ThemeProvider enableSystem={false} attribute="class">
          <Header2 />
            <Component {...pageProps} />
            <Footer2 />
            </ThemeProvider>
        </SettingsProvider>
      </ApolloProvider>

    </>
  )
}
