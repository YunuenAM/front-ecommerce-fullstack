import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import './checkoutsidemenu.scss'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import { Link } from 'react-router-dom'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.23',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setSearchByTitle(null)
  }
  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? 'd-flex' : 'visually-hidden'} checkout-side-menu flex-column  position-fixed  border border-dark bg-light rounded-2`} style={{ zIndex: 999 }}
    >
      <div className='d-flex justify-content-between items-center p-5'>
        <h2 className='text-xl'>My Order<i className='bi bi-x-square-fill' /></h2>

        <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='currentColor' className='bi bi-x-circle  pe-auto ' viewBox='0 0 16 16 ' onClick={() => context.closeCheckoutSideMenu()}>
          <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
          <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
        </svg>

      </div>
      <div className='px-4  overflow-y-scroll  flex-grow-1  '>
        {
        context.cartProducts.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))
      }
      </div>
      <div className='px-6 mb-4'>
        <p className='d-flex  justify-content-around  items-center'>
          <span>Total:</span>
          <span className=' text-xxl-end fw-bold '>${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>  <button className='w-100 bg-purple  p-3 rounded-2   text-light ' onClick={() => handleCheckout()}>Checkout</button>
        </Link>

      </div>
    </aside>
  )
}
export default CheckoutSideMenu
