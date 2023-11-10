import ProductDetails from '../ProductDetails'
import './index.css'

const Products = props => {
  const {details} = props
  const {name, products} = details

  return (
    <li>
      <p className="categoryName">{name} </p>
      <ul className="productsList">
        {products.map(eachProd => (
          <ProductDetails key={eachProd.id} prodDetails={eachProd} />
        ))}
      </ul>
    </li>
  )
}
export default Products
