import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

function Home () {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />

        ))
      )
    } else {
      return (
        <div> No matches available 😵‍💫</div>
      )
    }
  }

  return (
    <Layout>

      Home
      <div className=' mb-4'>

        <h1 className=' text-xxl-center '> Premium Products</h1>
      </div>

      <input
        type='text'
        placeholder='Search a product'
        className='form-control text-center    rounded-3  border border-black w-100    align-items-center   p-3  mb-3  focus-ring-success  '
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />

      <div className='container text-center'>
        <div className='row gap-4 mx-md-auto m-2 '>
          {renderView()}
        </div>
      </div>
      <ProductDetail />
    </Layout>
  )
}
export default Home
