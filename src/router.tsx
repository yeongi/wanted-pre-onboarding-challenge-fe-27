import { createBrowserRouter } from 'react-router-dom'

import { Auth, Main, Todo } from './pages'
import { Layout } from './layout'

type RoutePageType = {
  element: React.ReactNode
  path: string
  isPrivate?: boolean
}

const pages: RoutePageType[] = [
  {
    element: <Main />,
    path: '/',
  },
  {
    element: <Auth />,
    path: '/auth',
  },
  {
    element: <Todo />,
    path: '/todo',
  },
]

export const router = createBrowserRouter(
  pages.map((page) => ({
    element: <Layout>{page.element}</Layout>,
    path: page.path,
  }))
)
