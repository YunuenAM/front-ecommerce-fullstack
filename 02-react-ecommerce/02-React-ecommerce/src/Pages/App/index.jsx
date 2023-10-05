import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import '@/App.css'
import Home from '../Home'
import Logout from '../Logout'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Register from '../Register/Register'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'

// Bootstrap CSS

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/jewelery', element: <Home /> },
    { path: "/men's clothing", element: <Home /> },
    { path: "/women's clothing", element: <Home /> },
    { path: '/register', element: <Register /> },
    { path: '/logout', element: <Logout /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/signIn', element: <SignIn /> },
    { path: '/*', element: <NotFound /> }

  ])
  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <CheckoutSideMenu />
        <Navbar />
        <AppRoutes />

      </BrowserRouter>
    </ShoppingCartProvider>

  )
}

export default App
