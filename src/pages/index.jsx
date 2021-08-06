import { lazy } from 'react'

const HomePage = lazy(() => import('./HomePage'))
const AuthPage = lazy(() => import('./AuthPage'))
const DetailPost = lazy(() => import('./DetailPost'))

export { HomePage, AuthPage, DetailPost }
