import * as React from 'react'

import { ToastProvider } from 'react-toast-notifications'
import { Layout } from '../components/layout'

import '../styles/tailwind.scss'
import '../styles/index.scss'

const App: React.VFC<{ Component, pageProps }> = ({ Component, pageProps }) => {
  return (
    <ToastProvider placement="top-center" autoDismissTimeout={5000}>
        <div className="container mx-auto text-left">
          <Layout Component={Component} pageProps={pageProps} />
        </div>
    </ToastProvider>
  )
}

export default App