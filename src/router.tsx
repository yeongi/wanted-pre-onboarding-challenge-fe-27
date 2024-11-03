import { createBrowserRouter } from 'react-router-dom'

import { Auth, Main, Todo } from './pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: '/todo',
    element: <Todo />,
  },
])
