import Layout from '../../Components/Layout'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import { Link } from 'react-router-dom'
const MyOrder = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className='header'>
        <Link to='/my-orders'>
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-chevron-left' viewBox='0 0 16 16'>
            <path fillRule='evenodd' d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z' />
          </svg>
        </Link>
        <h1> MyOrder</h1>
      </div>

      <div className='d flex-column w-50 '>
        {
        context.order?.slice(-1)[0].products.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}

          />
        ))
      }
      </div>
    </Layout>
  )
}
export default MyOrder
