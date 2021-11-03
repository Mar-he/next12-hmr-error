import 'antd/dist/antd.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import PageLayout from './layout'

/* Msal */
import { MsalProvider } from "@azure/msal-react"
import { msalApp } from '../src/auth/authProvider'
/*i18n */
import { AccountInfo, EventType } from '@azure/msal-browser';

// Account selection logic is app dependent. Adjust as needed for different use cases.
const accounts = msalApp.getAllAccounts();
if (accounts.length > 0) {
  msalApp.setActiveAccount(accounts[0]);
}

msalApp.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event?.payload) {
    const account = (event.payload as AccountInfo);
    msalApp.setActiveAccount(account);
  }
});

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  )
}

export default MyApp

