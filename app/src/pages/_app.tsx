import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App ({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <title>iMessage</title>
        <meta name='description' content='iMessage, una plataforma de mensajería instantánea diseñada para ofrecer una experiencia de comunicación rápida, segura y confiable 🚀' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicons/favicon.ico' />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
