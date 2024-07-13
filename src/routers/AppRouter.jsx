import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import ProtectedRoute from "../routers/ProtectedRoute"
import HomePage from "../pages/HomePage"
import ArticlesPage from "../pages/ArticlesPage"
import ProfilePage from "../pages/ProfilePage"
import RegisterPage from "../pages/RegisterPage"
import LoginPage from "../pages/LoginPage"
import NotFoundPage from "../pages/NotFoundPage"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="articles" element={<ArticlesPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>

            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default AppRouter
