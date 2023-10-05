const OrdersCard = props => {
  const { totalPrice, totalProducts } = props

  return (
    <div className='d-flex justify-content-between item-center mb-3 border border-black w-75 p-4 rounded-2 '>

      <div className='d-flex justify-content-between w-50 '>
        <p className='d-flex flex-column '>
          <span>01.02.23</span>
          <span>{totalProducts} articles</span>
        </p>
        <div>
          <span className=' text-xxl-end fw-bold '>${totalPrice}</span>
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-chevron-right' viewBox='0 0 16 16'>
            <path fillRule='evenodd' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z' />
          </svg>
        </div>

      </div>

    </div>

  )
}
export default OrdersCard
