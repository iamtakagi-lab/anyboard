import * as React from 'react'

import { ToastProvider } from 'react-toast-notifications'
import { isLocationNotFoundError, RoconRoot, useRoutes } from 'rocon/react'
import { routes } from './routes'
import { NotFound } from './components/notfound'
import { Layout } from './layout'

const UsedRoutes: React.VFC<{}> = () => {
  try {
    return useRoutes(routes)
  } catch (e: unknown) {
    if (isLocationNotFoundError(e)) {
      return <NotFound />
    } else {
      console.error(e)
      return <></>
    }
  }
}

const Routes: React.VFC<{}> = () => {
  return <UsedRoutes />
}

export const App: React.VFC<{}> = () => {
  return (
    <ToastProvider placement="top-center" autoDismissTimeout={5000}>
      <RoconRoot>
        <div className="container mx-auto text-left">
          <Layout>
            <Routes />
          </Layout>
        </div>
      </RoconRoot>
    </ToastProvider>
  )
}