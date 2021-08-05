import { lazy } from 'react'

const HomePage = lazy(() => import('./HomePage'))
const AuthPage = lazy(() => import('./AuthPage'))
const PostDetail = lazy(() => import('./PostDetail'))

export { HomePage, AuthPage, PostDetail }
