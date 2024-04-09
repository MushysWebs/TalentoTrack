// pages/_app.js or pages/_app.jsx

import { SessionProvider } from 'next-auth/react';
import Navbar from '@/app/components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
