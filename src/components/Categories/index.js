import './index.css'

const Categories = props => {
  const {details, isActive} = props
  const activeCategoryClassName = isActive ? 'activeCategory' : ''

  return (
    <li className={`categoryItem ${activeCategoryClassName}`}>{details}</li>
  )
}
export default Categories
