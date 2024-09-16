import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import { Provider } from 'react-redux'
import store from './store.js'
import AuthPage from './pages/AuthPage.jsx'
import AllBlogsPage from './pages/AllBlogsPage.jsx'
import MyBlogsPage from './pages/MyBlogsPage.jsx'
import CreateBlogPage from './pages/CreateBlogPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import EditBlogPage from './pages/EditBlogPage.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<HomePage/>}/>
      <Route path='/auth' element={<AuthPage/>}/>
      <Route path='/blogs' element={<AllBlogsPage/>}/>
      <Route path='' element={<PrivateRoute/>}>
        <Route path='/myblogs' element={<MyBlogsPage/>}/>
        <Route path='/createblog' element={<CreateBlogPage/>}/>
        <Route path='/editBlog/:id' element={<EditBlogPage/>}/>
      </Route>
      <Route path='/blogs/:id' element={<BlogPage/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
  </Provider>
)
