// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import {Header} from "@/components";

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <Header />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
