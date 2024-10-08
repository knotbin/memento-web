import Head from 'next/head';
import Footer from '@/components/common/Footer';
import Header from '@/components//common/Header';
import Site from '@/components/common/Site';
import '@/styles/globals.css';
import config from '@/data/config';
import { Analytics } from "@vercel/analytics/react"

function App({ Component, pageProps, router }) {
  const { pathname, asPath } = router?.state ?? {};
  const defaultPageData = config.pages['/'];
  const pageData = config.pages[pathname] ?? config.pages['/'];
  const isDefault = defaultPageData === pageData;
  const title = isDefault
    ? `Memento | Your Mental Inbox`
    : `${pageData.title} | Memento`;
  const { description } = pageData;
  const { host } = config;

  return (
    <Site>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="description" content={description} />
        <meta property="og:url" content={`${host}${asPath}`} />
        {pathname !== '/blog/[...slug]' && (
          <>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${host}/social-preview.png`} />
          </>
        )}
        <meta name="apple-itunes-app" content="app-id=6541765296"></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_memento" />
        <meta name="twitter:creator" content="@_memento" />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      <Analytics />
    </Site>
  );
}

export default App;
