import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired
  }
  return (
    <div className='d-flex flex-column items-center mt-20%'>
      {children}
    </div>
  )
}
export default Layout
