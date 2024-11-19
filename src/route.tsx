import { createBrowserRouter } from 'react-router-dom'

import { Auth, Login, Main, SignUp, Todo } from './pages'
import { Layout } from './layout'

type RoutePageType = {
  element: React.ReactNode
  path: string
  isPrivate?: boolean
}

export const internalPages = {
  MAIN: '/',
  AUTH: '/auth',
  TODO: '/todo',
  LOGIN: '/login',
  SIGN_UP: '/sign-up',
}

const pages: RoutePageType[] = [
  {
    element: <Main />,
    path: internalPages.MAIN,
  },
  {
    element: <Auth />,
    path: internalPages.AUTH,
  },
  {
    element: <Login />,
    path: internalPages.LOGIN,
  },
  {
    element: <SignUp />,
    path: internalPages.SIGN_UP,
  },
  {
    element: <Todo />,
    path: internalPages.TODO,
    isPrivate: true,
  },
]

export const router = createBrowserRouter(
  pages.map((page) => ({
    element: <Layout>{page.element}</Layout>,
    path: page.path,
  }))
)
