import './index.css'

const ProductDetails = props => {
  const {prodDetails} = props
  const {name, weight, price, image} = prodDetails

  return (
    <li className="productsListItem">
      <div className="addRemoveContainer">
        <img src={image} alt="productImage" className="prodImage" />
        <button type="button" className="addRemoveButton">
          {' '}
          +{' '}
        </button>
      </div>

      <p>{price}</p>
      <p className="prodName">{name}</p>
      <p className="prodWeight">{weight}</p>
    </li>
  )
}

export default ProductDetails
