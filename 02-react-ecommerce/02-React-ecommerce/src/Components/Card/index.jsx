import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const Card = (data) => {
  const context = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
    context.openCheckoutSideMenu()
    context.closeProductDetail()
  }

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
    if (isInCart) {
      return (
        <div className='bg-pink text-black rounded-3 p-2'>
          <span
            className='fw-bold p-2 bg-pink'
          >
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-file-check' viewBox='0 0 16 16'>
              <path d='M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z' />
              <path d='M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z' />
            </svg>
          </span>
        </div>
      )
    } else {
      return (

        <div className='bg-pink text-white rounded-3 p-2' onClick={(event) => addProductsToCart(event, data.data)}>
          <span
            className='fw-bold p-2 bg-pink'
          >
            +
          </span>
        </div>
      )
    }
  }
  return (
    <div
      className='card mx-auto' style={{ width: '18rem' }} onClick={() => showProduct(data.data)}
    >
      <div className='position-relative'>
        <span className='fw-bold position-absolute bg-light rounded-5 m-2 p-1'>{data.data.category.category}</span>
        <img src={data.data.image} className='card-img-top' alt={data.data.title} />
        <div className='position-absolute top-0 end-0 p-2'>
          {renderIcon(data.data.id)}
        </div>
      </div>
      <div className='card-body'>
        <h5 className='card-title'>{data.data.title}</h5>
        <p className='card-text'>${data.data.price}</p>
      </div>
    </div>
  )
}
export default Card
